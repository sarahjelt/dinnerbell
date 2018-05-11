const express = require('express');
const router = express.Router();
const path = require('path');
const cors = require('cors');
const db = require('../models');
const app = express();
const mealsController = require("./mealsController");
const bodyParser = require('body-parser');
// app.use(cors());

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../views/index.html'));
});

router
  .route('/')
  .get(mealsController.findAllMeals);

router.post('/save', function(req, res) {
  const result = req.body;
  console.log(result);

  // result.name = 'banana pudding';
  // result.mealTime = 'dessert';
  // result.addedBy = 'Sara';
  // result.day = 'Sunday';
  // result.image_url = "https://www.the-girl-who-ate-everything.com/wp-content/uploads/2016/05/banana-pudding-12-732x1024.jpg";
  // result.source_url = "https://www.the-girl-who-ate-everything.com/magnolia-bakerys-famous-banana-pudding/";

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