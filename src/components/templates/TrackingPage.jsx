import React from "react";
import Result from "../molecules/Result";
import "../../style/tracking.css";

export default function TrackingPage ({match, information}) {
    
    const query = new RegExp(match.params.query, "i");
    
    const result = information.filter((item) => item.id.match(query));

    if (result[0] === undefined){
        return (
            <div className = "Tracking-Page">
              <h1>Tracking Page</h1>
              <p> Entered tracking ID is not valid, check again</p>
            </div>
        );

    } else
    
    return (
        <div className = "Tracking-Page">
          <h1> Tracking Detail</h1>        
          <Result data = {result[0]}/>
        </div>
    )

}