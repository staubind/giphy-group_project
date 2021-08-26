const { default: axios } = require('axios');
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();



router.get('/', (req,res)=>{

    const search = req.query.q
    
        axios({
          method: 'GET',
          url: `https://api.giphy.com/v1/gifs/search?q=${newSearch}`,
        params: {
          api_key: '5WEEIzmjn7QP0xhhODK1Qc55k7p0RqKb',
          // q:{search}
        }
      }).then(response => {
        console.log('In response', response.data);
        res.send(response.data);
      }).catch(error => {
        console.log('In response Err', error);
        res.sendStatus(500)
      
      });
    });
    
    module.exports = router;