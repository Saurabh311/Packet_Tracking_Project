import React from "react";
import {BrowserRouter as Switch, Route } from 'react-router-dom';

//Components import

import "./style/App.css";
import information from "./information.json";

import Header from "./components/molecules/Header"
import HomePage from "./components/templates/HomePage"
import TrackingPage from "./components/templates/TrackingPage"



export default function App() {
  return (
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
    </div>
  );
}


