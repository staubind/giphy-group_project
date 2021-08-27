import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';

function Search() {
    const dispatch = useDispatch();
    const search = useSelector(store=>store.search); //NEED SEARCH REDUCER
    
    const [newSearch, setNewSearch] =useState('')  //NEED 
    
    
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




  return (
    <div>
        <form onSubmit={submitSearch}>
          <input
            placeholder="Search"
            value={newSearch}
            onChange={handleChange}
          ></input>
          <button type="submit">SUBMIT</button>
          {search.map(element =><iframe src={element.embed_url}/>)}
        </form> 
    </div>
  );
}

export default Search;
