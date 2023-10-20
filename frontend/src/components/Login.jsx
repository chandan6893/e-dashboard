import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const navigate=useNavigate();

  const handleLogin=async()=>{
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result=await result.json();
    console.log(result)
    if(result.name){
      localStorage.setItem("user",JSON.stringify(result));
      navigate("/")
    }else{
      alert("Please Enter Correct Details")
    }
  }

  useEffect(()=>{
    const auth=localStorage.getItem("user");
    if(auth){
      navigate("/");
    }
  },[])

  return (
    <div className="Login">
      <div>
        <h1 className="LoginHeading">Login</h1>
      </div>
  
      <input
        className="LoginInputBox"
        type="text"
        placeholder="Please Enter Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="LoginInputBox"
        type="password"
        placeholder="Please Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="LoginBtn" type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login