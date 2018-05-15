const express = require('express');
const router = express.Router();
const path = require('path');
const cors = require('cors');
const db = require('../models');
const http = require('http');
const app = express();
const mealsController = require("./mealsController");
const bodyParser = require('body-parser');

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../views/index.html'));
});

router
  .route('/')
  .get(mealsController.findAllMeals);

router.post('/save', function(req, res) {
  const result = req.body;
  console.log(result);

  db.Meal
    .create(result)
    .then(function(dbMeal) {
      // res.redirect('/')
    })
    .catch (function(err) {
      res.json(err);
    })
    console.log('added bana');
});

router.get('/saved', function(req, res) {
  res.sendFile(path.join(__dirname + '/../views/saved.html'));
});

router.get('/calendar', function(req, res) {
  res.sendFile(path.join(__dirname + '/../views/calendar.html'));
});

// router.post('/save/:id', function(req, res) {
//   db.Meal
//     .create(result)
//     .then
// });

module.exports = router;