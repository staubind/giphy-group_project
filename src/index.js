import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import { Provider } from 'react-redux'

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
// rootsaga listens for SearchGif & favoriteGif dispatch
yield takeEvery('ADD_FAVORITE', favoriteGif);
yield takeEvery('SAGA_SEARCH_GIF', searchGif);
yield takeEvery('FETCH_FAVORITES', fetchFavorites);
}

function* fetchFavorites() {
    try {
        const response = yield axios.get('/api/favorite')
        yield put({
            type: 'SET_FAVORITES',
            payload:  response.data
        })
    } catch(error) {
        console.log('Failed to GET favorites: ', error);
        alert('Failed to GET favorites. See console for details.');
    }
}

function* favoriteGif(action) {
    console.log('bout to add a new favorite')
    try {
        const response = yield axios.post('/api/favorite', action.payload);
        console.log('POST /api/favorite', response.data);
    }
    catch (err) {
        console.log('favoriteGif has failed', error);
        alert('favoriteGif was unable to add a favorite gif');
    }
};

function* searchGif (action) {
    console.log('made it to searchGif on index.js')
    console.log(action.payload);
    try{
        const response = yield axios.get('/api/search', {
           params: {searchWord: action.payload} 
        }) //q is from giphy documentation
        
        yield put({
            type: 'SEARCH_GIF', 
            payload: response.data})
        }catch (error){
            console.log('searchGif error', error);
        }   
    }
    
  

//reducer for searching
const search = (state = [], action) => {
    if(action.type === 'SEARCH_GIF') {
        console.log(action.payload.data);
        return action.payload.data;
        
    }
    return state;

}

const favorites = (state = [], action) => {
    if(action.type === 'SET_FAVORITES') {
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        search,
        favorites
    }),
    applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
