import React from 'react';

function App(props) {


const dispatch = useDispatch();
const addGif = (giphy_link) => {
  console.log('the selected gif is ', giphy_link);
  dispatch({
    type: 'ADD_FAVORITE',
    payload:{giphy_link: giphy_link}
  });
};

  return (
    <div>
     <img src={random.image_url}/>
     <button onClick={fetchGifs}> New Gif</button>
     <button onClick={(event) => addGif('random.image_url')}>Favorite</button>
    </div>
  )
  
  }
export default App;
