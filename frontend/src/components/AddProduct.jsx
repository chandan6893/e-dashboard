import React,{useState} from 'react';

const AddProduct = () => {
  const [name,setName]=useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const addProduct=async()=>{
    // console.log(name,price,category,company)
    const userId=JSON.parse(localStorage.getItem("user"))._id
    // console.log(userId)
    let result = await fetch("http://localhost:5000/add-product",{
      method:"post",
      body:JSON.stringify({name,price,category,company,userId}),
      headers:{
        "Content-Type":"application/json"
      }

    });
    result=await result.json();
    console.log(result)
  }
  return (
    <div className="AddProduct">
      <div>
        <h1 className="AddProductHeading">Add Product</h1>
      </div>
      <input
        className="AddProductInputBox"
        type="text"
        placeholder="Please Enter Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="AddProductInputBox"
        type="text"
        placeholder="Please Enter Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        autoComplete="new-password"
      />
      <input
        className="AddProductInputBox"
        type="password"
        placeholder="Please Enter Product Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        autoComplete="new-password"
      />
      <input
        className="AddProductInputBox"
        type="password"
        placeholder="Please Enter Product Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <button className="AddProductBtn" type="button" onClick={addProduct}>
        SignUp
      </button>
    </div>
  );
}

export default AddProduct;