const express = require('express');
const router = express.Router();
const cors = require('cors');
const db = require('../models');
const app = express();
const mealsController = require("./mealsController");
app.use(cors());

// all saved meals from db
// router.get('/meals', function(req, res) {
//   db.Meal.find({})
//     .then((dbMeal) => res.json (dbMeal))
//     .catch(error => res.send(error));
//     console.log('I GET HERE');
// });

router
  .route('/meals')
  .get(mealsController.findAllMeals);

module.exports = router;