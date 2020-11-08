//React Core
import React from "react";
import { Link } from "react-router-dom";
import "../../style/footer.css"

export default function Footer() {
  return (
    
    <footer className="footer">      
      
      <div className="footer-right">
        
        <p>
          <a href="https://www.instagram.com/dhl_global/">
            <i class="fab fa-instagram-square"> Instagram</i>
            
          </a>
        </p>
        <p>
          <a href="https://www.facebook.com/dhl">
            <i class="fab fa-facebook-square"> Facebook</i>
          </a>
        </p>
        <p>
          <a href="https://www.youtube.com/user/dhl">
            <i class="fab fa-youtube"> Youtube</i>
          </a>
        </p>
      </div>
    </footer >
  );
}