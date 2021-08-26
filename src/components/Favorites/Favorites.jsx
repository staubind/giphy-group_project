import React from "react";
import { useDispatch } from 'react-redux'

function Favorites() {
const dispatch = useDispatch();

const addGif = (giphy_link) => {
    console.log('the selected gif is ', giphy_link);
    dispatch({
    type: 'ADD_FAVORITE',
    payload: { giphy_link: giphy_link }
    });
};
    return (
            <div>
                <img src={random.image_url} />
                <button onClick={(event) => addGif({ image_url })}>Favorite</button>
            </div>
        );
};
export default Favorites;

