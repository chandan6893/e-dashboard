import React,{useState,useEffect} from 'react'

const ProductList = () => {
const [products,setProducts]=useState([]);

useEffect(()=>{
    getProducts();
},[]);

const getProducts=async()=>{
    let result = await fetch("http://localhost:5000/products");
    result =await result.json();
    setProducts(result);
}


  return (
    <div className="ProductList">
      <table>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;