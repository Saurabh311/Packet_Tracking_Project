import React, {useState} from "react";
import { Link } from "react-router-dom"; 
import "../../style/search.css";

export default function Search() {
    //Reactivate Data
    const [query, setQuery] = useState("");
    return (
        <form className="serach-form">
          <label htmlFor= "trackNumber">Enter your ID number </label><br></br>
            <input className="search-bar"
                type="text"
                placeholder = "ID Number"
                value = {query}
                onChange = {( event ) => setQuery(event.target.value)} 
            /> <br></br>
            <Link to={`/Result/${query}`} className="button">Submit</Link>
        </form>
    );
}