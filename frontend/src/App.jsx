import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import Login from "./components/Login"
import "./App.css";
import PrivateComponent from "./components/PrivateComponent";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>products listing component</h1>} />
            <Route path="/add" element={<h1>Add product component</h1>} />
            <Route
              path="/update"
              element={<h1>Update products component</h1>}
            />
            <Route path="/logout" element={<h1>logout component</h1>} />
            <Route path="/profile" element={<h1>profile component</h1>} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
