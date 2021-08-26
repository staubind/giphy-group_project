import React from "react";

function Search() {
    const dispatch =useDispatch();
    const search =useSelector(store=>store.search); //NEED SEARCH REDUCER
    
    const [search, setNewSearch] =useState('')  //NEED 
    
    
   const submitSearch = event =>{
     event.preventDefault();
     dispatch({
       type:'SEARCH_GIF',   //NEED IN INDEX.JS
       payload:search
     });
     setNewSearch('');
   }
  
   const handleChange = event =>{
    console.log(event);
    setNewSearch(event.target.value)
   }




  return (
    <div>
      <input
        placeholder="Search"
        value="search"
        onChange={handleChange}
      ></input>
      <form onSubmit={submitSearch}></form>
    </div>
  );
}

export default Search;
