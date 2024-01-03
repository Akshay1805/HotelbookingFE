import React from 'react';
import '../Login/login.css'
import Introvid from '../../Resources/videos/Hotel-Intro-Video.mp4';

function Login() {
     return (
        
          
        
        
        
        <div className="page">
        
          <video autoPlay muted loop>
            <source src={Introvid} type="video/mp4" />
        </video>
          <div className="header">
            <div className="logo">
                <img src="" alt="Hotel Logo"/>
            </div>
            <div className="login">
              <a href="/login">Login</a>
                /Signup
            </div>
          </div>
          <hr className="breakerline"/>
        
          <div className="body">
        
            
        
            <div className="loginboxbck">
        
            </div>
          <div className="loginbox">
            <form className="Login">
              <div className="usernameform">
                
                <input type="text" className="username" id="username" placeholder="Username"/>
              </div>
            
              <div className="passform">
                
                <input type="text" className="pass" id="pass" placeholder="Password"/>
              </div>
              <div className="submitbutton">
                <input type="submit" className="subbutton"/>
              </div>
            </form>
          </div>
        
        
        </div>
        
        </div>
        
        
        


      );
}

export default Login;
