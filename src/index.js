import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';


function* rootSaga() {
// rootsaga listens for SearchGif & favoriteGif dispatch
yield takeEvery('ADD_FAVORITE', favoriteGif);
yield takeEvery('SEARCH_GIF', searchGif);
}

function* favoriteGif(action) {
    console.log('bout to add a new favorite')
    try {
        const response = yield axios.post('/routes/favorite.router', action.payload);
            console.log('POST /routes/favorite.router', response.data);
    }
    catch (err) {
        console.log('favoriteGif has failed', error);
        alert('favoriteGif was unable to add a favorite gif');
    }
};

function* searchGif (action) {
    console.log('searchGig', action.payload)
    try{
        const response = yield axios.get(`/search?q=${action.payload}`) //q is from giphy documentation
        
        yield put({
            type: 'SEARCH_GIF', 
            payload: response.data})
    }catch (error) {
        console.log('searchGif error', error);
    }
}

//reducer for searching
const search = (state = [], action) => {
    if(action.type === 'SEARCH_GIF') {
        return action.payload.data;
    }
    return state;

}

ReactDOM.render(<App />, document.getElementById('root'));
