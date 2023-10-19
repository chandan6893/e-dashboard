import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "../App.css";
const Signup = () => {
  const navigate=useNavigate();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
    const auth = localStorage.getItem("user");
     if (auth) {
       navigate("/");
     }
  })

  const collectData=async ()=>{
    console.log(name,email,password)
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result=await result.json();
    console.log(result);
    
    localStorage.setItem("user",JSON.stringify(result))
    navigate("/")
   
  }
  return (
    <div className="SignUp">
      <div>
        <h1 className="SignUpHeading">Register</h1>
      </div>
      <input
        className="SignUpInputBox"
        type="text"
        placeholder="Please Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="SignUpInputBox"
        type="text"
        placeholder="Please Enter Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="SignUpInputBox"
        type="password"
        placeholder="Please Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="SignUpBtn" type="button" onClick={collectData}>
        SignUp
      </button>
    </div>
  );
};

export default Signup;
