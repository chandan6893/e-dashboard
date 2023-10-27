import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");


  const navigate = useNavigate();
 const updateProduct=()=>{
    console.log(name,price,category,company)
 }
 
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
