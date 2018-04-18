const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const db = require('./models');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

const MONGODB_URI = process.env.MONGODB_URI || 
'mongodb://localhost:27017/dinnerbell';

app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

const routes = require('./controllers/controller.js');
const apiRoutes = require('./controllers/apicontroller.js');

app.use('/', routes);
app.use('/api', apiRoutes);


app.listen(PORT, () => console.log(`listening on port ${PORT}!!!!`));

//needs some API calls to a recipe API
//save in MongoDB
//filter according to who added