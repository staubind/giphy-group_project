import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react';

//display favs
// add category selection area


function Favorites() {
    const favorites = useSelector(state => state.favorites);
    const dispatch = useDispatch();

    useEffect(() => {
        // load our favorites
        dispatch({
            type: 'FETCH_FAVORITES'
        })
    },[])

    return (
            <>
                {favorites.map(element => <iframe src={element.embed_url} />)}
            </>
        );
};
export default Favorites;

