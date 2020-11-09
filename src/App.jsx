import React from "react";
import {useEffect, useState } from "react";

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


//Components import

import "./style/App.css";
//import information from "./information.json";

import Header from "./components/molecules/Header"
import HomePage from "./components/templates/HomePage"
import TrackingPage from "./components/templates/TrackingPage"
import Footer from "./components/molecules/Footer";



export default function App() {
  const [status, setStatus] = useState(0);

  const [information, setInformation] = useState([]);
  const endpoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  // Contructor like hook
  useEffect(() => {
    const getData = async () => {
      try {
        // Make fetch request to obtain info frmo the endpoint URL address
        // Cors is a security measure.
        const response = await fetch(endpoint, { mode: "cors" });
        const data = await response.json();
        
        setInformation(data);    
        console.log(data);    

        setStatus(1);
      } catch {
        setStatus(2);
      }
    };

    getData();
  }, []);  
  
  return (
    <Router>
    <div className="App">
     <Header />
     <Switch>
      <Route exact path="/">
       <HomePage />
      </Route>
      <Route path="/Result/:query"
        render={({ match }) =>(
        <TrackingPage match={match} information={information} />
        )}
      />
     </Switch>   
     <Footer /> 
    </div>
    </Router>
  );
}


