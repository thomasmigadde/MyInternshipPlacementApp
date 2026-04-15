// signuppage.jsx
import React from "react";
import {useState } from "react";

export default function SignupPage() {
  const [text, setText] = useState("");
  return (
       <div className="signup-page-container">
        <div>
             <input type = {"text"} placeholder = {"Username"} value = {text} onChange={(e) => setText(e.target.value)}  className = "inputClass"/>
        </div>
        <div>
            <input type = {"text"} placeholder = {"Email"} value = {text} onChange={(e) => setText(e.target.value)}  className = "inputClass"/>
        </div>      
    </div>
  );
}
