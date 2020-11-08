import React from "react";
import "../../style/header.css";
import logo from "../../assets/dhl-logo.svg"



export default function Header() {
    return (
        <nav className="header">
         <div>
            <img className="App-logo"
            src ={logo}
            alt= "logo of dlf company in black font with white background"        
            />
         </div> 
         <div>
            <p className= "line">Welcome to DHL Tracking Portal</p>
         </div>

        </nav>
    )
}