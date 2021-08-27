import React from 'react';
import Favorites from '../Favorites/Favorites.jsx';
import Search from '../Search.js';

import "./App.css";

import {HashRouter as Router, Route, Link } from 'react-router-dom';


function App(props) {

  return (

    <div className="app">
    <div className="header">
      <h1>Group Project Giphy Search</h1>
      </div>
      <div className="app__page">
      <Favorites />
      <Search />
      </div>

    <div>
      <h1>Giphy Search!</h1>
      <Router>
      <header>
        <ul>
          <li><Link to="search">Search</Link></li>
          <li><Link to="favorites">Favorites</Link></li>
        </ul>
      </header>
        <Route path="/favorites" exact>
          <Favorites />
        </Route>
        
        <Route path="/search">
          <Search />
        </Route>

      </Router>

    </div>
  )
  
  }
export default App;
