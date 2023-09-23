import "./FooterStyles.css"
import React from 'react'
import {FaHome ,FaPhone,FaMailBulk, FaFacebook, FaLinkedin, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            
            <FaHome size={20} style={{ color:"#fff",marginRight:"2rem"}} />
          <div>
          <p>Rath Galli,Songir</p>
                <p>Tal and District- Dhule</p>
            <p>pin code 424309
          </p>
        </div></div>

        <div className="phone">
            <h4>
      <FaPhone size={20} style={{ color:"#fff",marginRight:"2rem"}}/>

      +91     8010628799</h4>
      </div>

      <div className="email">
            <h4>
                
      <FaMailBulk size={20} style={{ color:"#fff",marginRight:"2rem"}}/>
      rutvika.wagh@gmail.com</h4>
        </div>
        </div>
        <div className="right">
            <h4>About Myself!</h4>
            <p>Hello, This is <i><b><u>Rutvika Wagh</u></b></i>.Second Year under graduate Student at <i>Cummins College of Engineering for women, Karvenagar Pune</i>.</p><p>I am super enthuastics about programming.</p><p>searching for a great opportunity to showcase my skills.</p>
<div className="social">
<FaFacebook size={30} style={{ color:"#fff",marginRight:"1rem"}}/>
<FaInstagram size={30} style={{ color:"#fff",marginRight:"1rem"}}/>
<FaLinkedin size={30} style={{ color:"#fff",marginRight:"1rem"}}/>
</div>
        </div>
    </div>
   </div> 
  );
};

export default Footer;
