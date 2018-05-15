const express = require('express');
const router = express.Router();
const cors = require('cors');
const db = require('../models');
const app = express();
const mealsController = require("./mealsController");

// all saved meals from db
router
  .route('/meals')
  .get(mealsController.findAllMeals);

module.exports = router;