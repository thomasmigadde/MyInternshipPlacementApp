
import React from "react";
import {useState, useEffect} from "react";
import { useNavigation } from "./usenavigation.jsx";
import {api} from "front/api.js"

export default function DisplayPage({userId}) {
const [user , setUser] = useState(null)

useEffect (() => {
try{
  const fetchUser = async () => {
    const response = await api.get(`/stakeholders/${userId}`);
    setUser(data);
  }
}  catch(error){
  console.error("Error fetching user data:", error)} ;
  setError("Error fetching user data. Please try again.");
});  

if (userId) {
  fetchUser();
}
[userId]


  return (
  <>
    {user ? (
       <div className="signup-page-container">
       <h1>{user.username}</h1> 
       <h1>{user.email}</h1>    
    </div>) : (<>
      <p>User not found.</p>
    </>)
    }
  </>
  );
}
