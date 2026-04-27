import React, { useState, useEffect } from "react";
import { api } from "/front/api.js"; // Ensure this path is correct

export default function DisplayPage({ userId }) {
  // 1. ADD error state so setError works
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the async function INSIDE the useEffect
    const fetchUser = async () => {
      // 2. Check if userId exists before fetching
      if (!userId) return; 

      try {
        const response = await api.get(`/stakeholders/${userId}`);
        // 3. Use 'response' (the variable you created), not 'data'
        setUser(response); 
        setError(null); // Clear previous errors
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Error fetching user data. Please try again.");
      }
    };

    fetchUser(); // Call the function
  }, [userId]); // 4. Move dependency array here to close the useEffect properly

  // Handle Loading / Error / Data states
  if (error) return <p style={{color: 'red'}}>{error}</p>;
  if (!user && userId) return <p>Loading...</p>;
  if (!userId) return <p>No User ID provided.</p>;

  return (
    <div className="signup-page-container">
      {user ? (
        <>
          <h1>{user.username}</h1>
          <h1>{user.email}</h1>
        </>
      ) : (
        <p>User not found.</p>
      )}
    </div>
  );
}