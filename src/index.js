import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';


yield takeEvery('SEARCH_GIF', searchGif); // rootsaga listens for SearchGif dispatch

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
