import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';

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
          <input
            placeholder="Search"
            value={newSearch}
            onChange={handleChange}
          ></input>
          <button type="submit">SUBMIT</button>
          </form> 
            {search.map(element => {
              return (
                <>
                  <iframe src={element.embed_url} />
                  <button onClick={() => addFavorite(element.embed_url)}>Favorite It</button>
                </>
              );
            })}
    </div>
  );
}

export default Search;
