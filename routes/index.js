const express = require('express');
const db = require('../db/models'); //db.Model
const router = express.Router()
//test

/* GET home page. */
router.get('/', async function(req, res, next) {
  const recipes = await db.Recipe.findAll({
    order: [ ['title', 'ASC'] ],
    limit: 10
    });
  res.render("index", { title: 'Home', recipes });
});

module.exports = router;
