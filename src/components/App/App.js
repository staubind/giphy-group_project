import React from 'react';
import Favorites from '../Favorites/Favorites.jsx';
import Search from '../Search.js';
// import hashrouter, link, route
import {} from 'react-router'

function App(props) {

  return (
    <div>
      <h1>Giphy Search!</h1>
      <Favorites />
      <Search />
    </div>
  )
  
  }
export default App;
