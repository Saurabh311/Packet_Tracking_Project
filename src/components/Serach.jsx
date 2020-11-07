import React, {useState} from "react";
import { Link } from "react-router-dom"; 

export default function Search() {
    //Reactivate Data
    const [query, setQuery] = useState("");
    return (
        <form className="serach-form">
        <label htmlFor= "trackNumber">Enter your tracking number </label>
        <input className="serach-bar"
           type="text"
           placeholder = "Tracking Number"
           value = {query}
           onChange = {( event ) => setQuery(event.target.value)}
        />
        <Link to={'/Result/${query}'}>Submit</Link>
        </form>
    );
}