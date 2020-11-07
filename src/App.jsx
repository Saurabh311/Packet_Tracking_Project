import React, { useEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components import

import "./style/App.css"
import information from "../information.json"


export default function App() {
  return (
    <div className="App">
    <Header />
    <Switch>
    <Router exact path="/">
    <HomePage />
    </Router>
    <Route exact path="/customer/:id"
      render={({ match }) =>(
        <TrackingPage match={match} information={information} />
      )}
      />
      <Route exact path="/customer/:id"
      render={({ match }) =>(
        <TrackingPage match={match} information={information} />
      )}
      />
      <Route path="/Faq component={faq}" />
      </Switch>
    </div>
  );
}


