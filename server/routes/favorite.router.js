const { default: axios } = require('axios');
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();



// return all favorite images  //GET CALL FOR GIFFY API
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {
  console.log(req.body);
  const sqlText = `
  INSERT INTO "favorites"
  ("giphy_link")
  VALUES ($1)`;
  pool.query(sqlText, [req.body.giphy_link])
    .then((result) => {
      res.sendStatus(200);
    }).catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
  });

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
