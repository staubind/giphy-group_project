import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';




function* rootSaga() {
yield takeEvery('ADD_FAVORITE', favoriteGif);
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



ReactDOM.render(<App />, document.getElementById('root'));
