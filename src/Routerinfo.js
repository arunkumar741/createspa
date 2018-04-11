import React from 'react';
import Appmount from './Appmount';
import Demo from './Demo';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';


function Routerinfo(props) {

   return(
      <Router>
        <div>
          <Route exact path="/" component={Appmount}/>
          <Route path="/Demo" component={Demo}/>
        </div>
      </Router>
      );
  
 }


export default Routerinfo;