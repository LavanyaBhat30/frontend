import React from "react";
import './LandingPage.css'
import { Link } from 'react-router-dom';

function LandingPage(){
  return(
    <div className="landing-page">
      <img className="img1" src={require('./images/landingpage.png')}/>
      <img className="img2" src={require('./images/clone.png')}/>
    
    <Link to="/postview">
      <button className="btn">Go to My Page</button>
    </Link>
    </div>
  )
}
export default LandingPage;