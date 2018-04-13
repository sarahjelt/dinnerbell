const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../views/index.html'));
});

router.get('/saved', function(req, res) {
  res.sendFile(path.join(__dirname + '/../views/saved.html'));
});

module.exports = router;