import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [name,setName]=useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error,setError]=useState(false)

  const navigate = useNavigate();

  const addProduct=async()=>{

    console.log(!name)
    if(!name || !price || !category || !company){
      setError(true);
      return false
    }


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
    navigate("/")
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
      {error && !name && (
        <span className="invalidInput">please enter valid name</span>
      )}
      <input
        className="AddProductInputBox"
        type="text"
        placeholder="Please Enter Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        autoComplete="new-password"
      />
      {error && !price && (
        <span className="invalidInput">please enter valid price</span>
      )}
      <input
        className="AddProductInputBox"
        type="text"
        placeholder="Please Enter Product Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        autoComplete="new-password"
      />
      {error && !category && (
        <span className="invalidInput">please enter valid category</span>
      )}
      <input
        className="AddProductInputBox"
        type="text"
        placeholder="Please Enter Product Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      {error && !company && (
        <span className="invalidInput">please enter valid company</span>
      )}
      <button className="AddProductBtn" type="button" onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
}

export default AddProduct;