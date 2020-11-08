import React from "react";
import "../../style/App.css";

export default function Result({data}){
    const {id, status, eta, parcel_id, location_name, user_name} = data;
    console.log(id);
    return (
        <div className="result">
           <p>ID: {id}</p>
           <p>User name: {user_name}</p>
           <p>Parcel ID: {parcel_id}</p>
           <p>Location: {location_name} </p>
           <p>Status: {status}</p>           
           <p>ETA: {eta}</p>
                   
        </div>
    );
}