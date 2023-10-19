import React,{useState} from 'react';

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleLogin=()=>{

  }
  return (
    <div className="Login">
      {/* <div>
        <h1 className="LoginHeading">Login</h1>
      </div> */}
  
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