// signuppage.jsx
import React from "react";
import {useState } from "react";
import { useNavigation } from "./usenavigation.jsx";
import {useNavigate} from "react-router-dom"


export default function SignupPage() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const { goToDisplay } = useNavigation();
  return (
       <div className="signup-page-container">
        <div>
             <input type = {"text"} placeholder = {"Username"} value = {text} onChange={(a) => setText(a.target.value)}  className = "inputClass"/>
        </div>
        <div>
            <input type = {"email"} placeholder = {"Email"} value = {email} onChange={(e) => setEmail(e.target.value)}  className = "inputClass"/>
        </div> 
        <div>
          <button 
                type="button"
                className="loginButtonClass" 
                onClick={goToDisplay}
              >
                Login
              </button>
        </div>     
    </div>
  );
}
