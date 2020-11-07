import React from "react";

export default function Result({data}){
    const {id, status, eta, parcel_id, sender, location_name, user_phone, User_name} = data;
    console.log(id);
    return (
        <div className="result">
           <p>ID: {id}</p>
           <p>User name: {User_name}</p>
           <p>Parcel ID: {parcel_id}</p>
           <p>Status: {status}</p>
           <p>ETA: {eta}</p>
        
        </div>
    );
}