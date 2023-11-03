import React,{useState,useEffect} from 'react'
import { useNavigate,Link } from "react-router-dom";
const ProductList = () => {
const [products,setProducts]=useState([]);
const navigate=useNavigate();
useEffect(()=>{
    getProducts();
},[]);

const getProducts=async()=>{
    let result = await fetch("http://localhost:5000/products");
    result =await result.json();
    setProducts(result);
}

const deleteProduct=async(id)=>{
  let result = await fetch(`http://localhost:5000/product/${id}`,{
  method:"Delete"
  });
  result=await result.json();
  if(result){
    getProducts();
  }

  // if
}

const handleSearch=async(e)=>{
  let key=e.target.value;
  if(key){
    let result = await fetch(`http://localhost:5000/search/${key}`);
    result = await result.json();
    // console.log(result);
    if(result){
      setProducts(result);
    }
    
  }else{
    getProducts();
  }
  
}


  return (
    <div className="ProductList">
      <div className="ProductListInputContainer">
        <input
          style={{ width: "45rem", height: "2.5rem" }}
          type="text"
          placeholder="Search...."
          onChange={handleSearch}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
                <td>
                  <button onClick={() => deleteProduct(product._id)}>
                    Delete
                  </button>
                  <Link
                    to={`/update/${product._id}`}
                    style={{ color: "green" }}
                  >
                    <button>Update Product</button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <h2 className="ProductListNoResultFound">No Result Found</h2>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;