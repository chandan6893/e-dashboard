import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import "../App.css";
const Nav = () => {
  const navigate=useNavigate();
   const auth = localStorage.getItem("user");

const  logout=()=>{
  localStorage.clear();
  navigate("/signup")
}

  return (
    <div className="Nav">
      {auth ? (
        <ul className="ProductNavContainer1">
          <li>
            <img
              src="https://s3u.tmimgcdn.com/u8265365/49e7f3f6c7a60ec8b0aea61cd17de1f5.jpg"
              alt="Logo"
              className="NavLogo"
            />
          </li>
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
            <Link to="/signup" onClick={logout}>
              <div>{JSON.parse(auth).name}</div>
              <div>Logout</div>
            </Link>
          </li>
        </ul>
      ) : (
        <div className="Container2">
          <img
            src="https://s3u.tmimgcdn.com/u8265365/49e7f3f6c7a60ec8b0aea61cd17de1f5.jpg"
            alt="Logo"
            className="NavLogo"
          />
          <div className="ProductsSignUpLogin">
            <div>
              <Link to="/signup">SignUp</Link>
            </div>
            <div>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
