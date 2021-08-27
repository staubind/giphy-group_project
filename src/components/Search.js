import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import "./Search.css";

function Search() {
    const dispatch = useDispatch();
    const search = useSelector(store => store.search); //NEED SEARCH REDUCER
    
    const [newSearch, setNewSearch] = useState('')  //NEED 
    
    
   const submitSearch = event =>{
     event.preventDefault();
     console.log('we are about to dispatch our query');
     dispatch({
       type: 'SAGA_SEARCH_GIF',   //NEED IN INDEX.JS
       payload: newSearch
     });
     setNewSearch('');
   }
  
   const handleChange = event =>{
    console.log(event);
    setNewSearch(event.target.value)
   }

   const addFavorite = (giphy_link) => {
    console.log('the selected gif is ', giphy_link);
    dispatch({
    type: 'ADD_FAVORITE',
    payload: { giphy_link: giphy_link }
    });
};


  return (
    <div>
        <form onSubmit={submitSearch}>
          <div className="input">
          <input
            placeholder="Search"
            value={newSearch}
            onChange={handleChange}
          ></input>
          <button className="submit" type="submit">SUBMIT</button>
          </div>
          </form> 
          
            {search.map(element => {
              return (
                <>
                <div className="display">
                  <iframe src={element.embed_url} />
                  
                  <button className="btn" onClick={() => addFavorite(element.embed_url)}>Favorite It</button>
                  </div>
                </>
               
              );
            })}
    </div>
  );
}

export default Search;
