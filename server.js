const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const db = require('./models/Meals.js');
const PORT = process.env.PORT || 3000;
const app = express();
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/dinnerbell';

app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

const routes = require('./controllers/controller.js');

app.use('/', routes);

app.listen(PORT, () => console.log(`listening on port ${PORT}!!!!`));

//needs some API calls to a recipe API
//save in MongoDB
//filter according to who added