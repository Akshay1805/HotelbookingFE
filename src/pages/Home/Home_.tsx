import React from 'react';
import '../Home/home.css'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function Home() {
     return (
        
          

<html>
   
   <head>
      <title>Hotel Name</title>
      </head>   
   <div className="header">
        <div className="logo">
            <img src="" alt="Hotel Logo"/>
        </div>
        <div className="login">
          <a href="/login">Login</a>
          /Signup
        </div>
   </div>
   <hr />
   <div className="welcome">
        <canvas id="wel" width="100vw" height="20vh">

        </canvas>
   </div>

   <div className="welcome"> Welcome</div>
   <div className="tst"> <a href="https://www.google.co.in/">tst</a></div>
   

   <div className="desc-para">
          <div className="txtcontainer" >
               <p className="txt"> Welcome to [Hotel Name], where luxury meets comfort, and every stay is a memorable experience. Nestled in the heart of [City/Location], our hotel is a beacon of sophistication, offering a perfect blend of modern elegance and timeless charm. From the moment you step through our doors, you will be enveloped in a world of unparalleled hospitality, where our dedicated team is committed to ensuring your every need is met with a warm and personalized touch.               </p>
          </div>
          <div className="picholder">
                    <img src="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg" alt="Some hotel image "  className="pic"/>
          </div>
   </div>
   <div className="desc-para">
          <div className="picholder">
                    <img src="https://www.ohotelsindia.com/pune/images/13c6386862540c41822c39464b130b65.jpg" alt="Some hotel image "  className="pic"/>
          </div>
          <div className="txtcontainer" >
               <p className="txt"> [Hotel Name] boasts a prime location, conveniently situated near [major attractions, landmarks, or business districts], making it the ideal choice for both leisure and business travelers. Our meticulously designed rooms and suites provide a sanctuary of relaxation, adorned with contemporary decor and equipped with state-of-the-art amenities. Whether you're here for a romantic getaway, a family vacation, or a business trip, we have the perfect accommodation to suit your needs.               </p>
          </div>
     </div>
     
     
  
</html>


      );
}

export default Home;
