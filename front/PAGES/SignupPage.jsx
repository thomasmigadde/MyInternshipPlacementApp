// signuppage.jsx
import React from "react";
import {useState } from "react";
import { useNavigation } from "/PAGES/usenavigation.jsx";
import {api} from "/front/api.js";



export default function SignupPage() {
  const { goToDisplay } = useNavigation();
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const response = await api.post("/stakeholders", { username: text, email: email });
      setSuccess("Signup successful!");
      setEmail("");
      setText("");
      goToDispaly();
    }

      catch (error) {
          console.error("Signup error:", error); // See full error in console
          setError(error.message || "Error during signup. Please try again."); // Show user-friendly message

      } 
    }; 
  return (
       <div className="signup-page-container">
        <form onSubmit={handleSubmit}>
        <div>
             <input type = {"text"} placeholder = {"Username"} value = {text} onChange={(a) => setText(a.target.value)} disabled = {loading} required className = "inputClass"/>
        </div>
        <div>
            <input type = {"email"} placeholder = {"Email"} value = {email} onChange={(e) => setEmail(e.target.value)} disabled = {loading} required className = "inputClass"/>
        </div> 
        <div>
          <button 
                type="submit"
                className="loginButtonClass"   
                disabled={loading}           
              >
                Login
              </button>
        </div>
        </form>     
    </div>
  );
}
