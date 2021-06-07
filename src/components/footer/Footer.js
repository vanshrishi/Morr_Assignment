import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons"
  import './footer.css'
  

const Footer =()=>
{

   

    return(<div className = 'footer'>
        <p>
        <span >Home  | Terms and Condition | Privacy Policy | Collection Statement | Help | Manage Account</span></p>
        <p> Copyright c 2016 DEMO Streaming. All Rights Reserved</p>
        <FontAwesomeIcon icon ={faFacebook} />  <FontAwesomeIcon icon ={faTwitter} />  <FontAwesomeIcon icon ={faInstagram} /> 
      <div> <img className ='img2' src= './images/appstore.png' alt="pic" />
       <img className ='img1' src= './images/playstore.png' alt="pic" />
       <img className ='img3' src= './images/microsoft.png' alt="pic" />
       </div>
        </div>
    )
}
export default Footer