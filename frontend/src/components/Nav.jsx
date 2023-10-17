import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Nav = () => {
   const auth = localStorage.getItem("user");
  return (
    <div className="Nav">
      <ul>
        <li>
          <Link to="/">products</Link>
        </li>
        <li>
          <Link to="/add">Add Product</Link>
        </li>
        <li>
          <Link to="/update">Update Product</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          {auth ? 
            <Link to="/logout">Logout</Link>:<Link to="/signup">SignUp</Link>
          }
        </li>
      </ul>
    </div>
  );
};

export default Nav;
