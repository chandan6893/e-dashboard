import React, { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");


  const navigate = useNavigate();
  const params=useParams();

 const updateProduct=async()=>{
    // console.log(name,price,category,company)
  let result = await fetch(`http://localhost:5000/product/${params.id}`, {
    method: "put",
    body: JSON.stringify({ name, price, category, company }),
    headers:{
      "Content-Type":"application/json"
    }
  });
  result=await result.json();

  console.log(result);
  navigate("/")
 }

 useEffect(()=>{
  console.log(params)
  getProductDetails();
 },[]);

 const getProductDetails = async () => {
   let result = await fetch(`http://localhost:5000/product/${params.id}`);
   result = await result.json();
   console.log(result);
   setName(result.name);
   setPrice(result.price);
   setCategory(result.category);
   setCompany(result.company);
 };
 
  return (
    <div className="AddProduct">
      <div>
        <h1 className="AddProductHeading">Update Product</h1>
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
        type="text"
        placeholder="Please Enter Product Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        autoComplete="new-password"
      />

      <input
        className="AddProductInputBox"
        type="text"
        placeholder="Please Enter Product Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <button className="AddProductBtn" type="button" onClick={updateProduct}>
        Update
      </button>
    </div>
  );
};

export default UpdateProduct;
