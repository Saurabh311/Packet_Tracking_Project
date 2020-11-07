import React from "react";
import { Link } from "react-router-dom"; 

import logo from "./"

export default function Header (){
    return (
        <section>
        <img className="Logo"
        src ={logo}
        alt= "logo of dlf company in black font with white background"
        />
        <ul className="list-link">
        <link to= "./faq">
        <li>Faq </li>
        </link>
        <link to="/" >
        <li>Home</li>
        </link>
        </ul>
        </section>
    )
}