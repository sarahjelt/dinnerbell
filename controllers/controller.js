const express = require('express');
const router = express.Router();
const path = require('path');
const cors = require('cors');
const db = require('../models');
const app = express();
app.use(cors());

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../views/index.html'));
});

router.get('/saved', function(req, res) {
  res.sendFile(path.join(__dirname + '/../views/saved.html'));
});

// router.post('/save/:id', function(req, res) {
//   db.Meal.
// });

module.exports = router;