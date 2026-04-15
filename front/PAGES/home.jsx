import React, { useState } from 'react';
import heropic from "./heropic.jpg";
import {useNavigate} from 'react-router-dom';
const Home = () => {
  
  const navigate = useNavigate();
  
  return (
    <>
      <div className="headerContainer">
        <h3 className="InternMonitorFonti">The InternMonitor</h3>
      </div>
      <div className="homeContainer">
        <div className="AdminClass">
          <div>
            <h1>The Administrator</h1>
          </div>
          <div>
            <img className="imageClass" src={heropic} alt="Administrator Profile" />
          </div>
          <div>
              <button 
                type="button"
                className="loginButtonClass" 
              >
                Login
              </button>
              <button 
                type="button"
                className="signupButtonClass" 
              >
                Signup
              </button>
          </div>
        </div>
        <div className="SupervisorClass">
          <div>
            <h1>The Supervisor</h1>
          </div>
          <div>
            <img className="imageClass" src={heropic} alt="Supervisor Profile" />
          </div>
          <div>
              <button 
                type="button"
                className="loginButtonClass" 
              >
                Login
              </button>
              <button 
                type="button"
                className="signupButtonClass" 
              >
                Signup
              </button>
          </div>
        </div>
        <div className="InternClass">
          <div>
            <h1>The Intern</h1>
          </div>
          <div>
            <img className="imageClass" src={heropic} alt="Intern Profile" />
          </div>
          <div>
              <button 
                type="button"
                className="loginButtonClass" 
              >
                Login
              </button>
              <button 
                type="button"
                className="signupButtonClass" 
              >
                Signup
              </button>
          </div>
        </div>
        <div className="WorkplaceSupervisorClass">
          <div className="WorkplaceSupervisorHeader">
            <h1>Workplace Admin</h1>
          </div>
          <div>
            <img className="imageClass" src={heropic} alt="Workplace Supervisor Profile" />
          </div>
          <div>
              <button 
                type="button"
                className="loginButtonClass" 
              >
                Login
              </button>
              <button 
                type="button"
                className="signupButtonClass" 
              >
                Signup
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
