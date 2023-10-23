const express=require("express");
const cors=require('cors');

require('./db/config');
const User = require('./db/User');
const Product = require("./db/Product");
const app=express();

app.use(express.json())
app.use(cors());

// Register API
app.post('/register',async(req,res)=>{
    let user=new User(req.body);
    let result=await user.save()
    result=result.toObject();
    delete result.password;
    console.log(result)
    res.send(result)
   
})

// Login API
app.post("/login",async(req,res)=>{
//   console.log(req.body)
    if (req.body.email && req.body.password) {
      let user = await User.findOne(req.body).select("-password");
      if (user) {
        res.send(user);
      } else {
        res.send({ result: "No User Found" });
      }
    } else {
      res.send({ result: "No User Found" });
    }
    
})

// add-products api

app.post("/add-product",async (req,res)=>{
  let product= new Product(req.body);
  let result= await product.save();
  res.send(result);
  console.log(result)
});


// ****************************PRODUCTS API**************************************/
app.get("/products",async(req,res)=>{
  let products=await Product.find();
  if(products.length>0){
    res.send(products);
  }else{
    res.send({result:"products not found"})
  }
})

app.listen(5000);
