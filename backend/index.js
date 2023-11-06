const express=require("express");
const cors=require('cors');

require('./db/config');
const User = require('./db/User');
const Product = require("./db/Product");
const app=express();

const Jwt=require("jsonwebtoken");
const  jwtKey="e-comm";
// jwtKey should/must be secret.we can keep it in environment(env) file 

app.use(express.json())
app.use(cors());


// Register API
app.post('/register',async(req,res)=>{
    let user=new User(req.body);
    let result=await user.save()
    result=result.toObject();
    delete result.password;
    console.log(result)
    
    Jwt.sign({ result }, jwtKey, { expiresIn: "36h" }, (err, token) => {
      if (err) {
        res.send({
          result: "something  went wrong ,please try after some time",
        });
      }
      res.send({ result, auth: token });
    });
   
})

// Login API
app.post("/login",async(req,res)=>{
//   console.log(req.body)
    if (req.body.email && req.body.password) {
      let user = await User.findOne(req.body).select("-password");
      if (user) {
        Jwt.sign({ user }, jwtKey, { expiresIn: "36h" }, (err, token) => {
          if (err) {
            res.send({
              result: "something  went wrong ,please try after some time",
            })
          }
          res.send({ user, auth: token })
        })
        // res.send(user)
      } else {
        res.send({ result: "No User Found" });
      }
    } else {
      res.send({ result: "No User Found" });
    }
    
})

// add-products api

app.post("/add-product", verifyTokenMiddleware, async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save();
  res.send(result);
  console.log(result);
});


// ****************************PRODUCTS API**************************************/
app.get("/products", verifyTokenMiddleware, async (req, res) => {
  let products = await Product.find();
  if (products.length > 0) {
    res.send(products);
  } else {
    res.send({ result: "products not found" });
  }
});

// *****************Delete API********
app.delete("/product/:id", verifyTokenMiddleware, async (req, res) => {
  let result = await Product.deleteOne({ _id: req.params.id });
  res.send(result);
});

app.get("/product/:id", verifyTokenMiddleware, async (req, res) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ resut: "record not found" });
  }
});
// update API
app.put("/product/:id", verifyTokenMiddleware, async (req, res) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  console.log(result);
  res.send(result);
});

// Search API for Product
app.get("/search/:key", verifyTokenMiddleware, async (req, res) => {
  let result = await Product.find({
    "$or": [
      { name: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });
  res.send(result);
});


// Auth Token Verification
function verifyTokenMiddleware(req,res,next){
  let token = req.headers["authorization"];
  if(token){
    token=token.split(' ')[1];
    console.log("middleware called",token)

    Jwt.verify(token,jwtKey,(err,valid)=>{
      if(err){
        res.status(401).send({ result: "Please Provide valid Token " });
      }else{
        next();
      }
    })

  }else{
    res.status(403).send({result:"Please Add Token With header"})
  }
  
}





app.listen(5000);
