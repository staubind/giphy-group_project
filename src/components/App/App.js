import React from 'react';
import Favorites from '../Favorites/Favorites.jsx';
import Search from '../Search.js';
import "./App.css";

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
    </div>
  )
  
  }
export default App;
