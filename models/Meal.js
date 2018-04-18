const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MealSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  mealTime: {
    type: String,
    required: true
  },
  addedBy: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: false
  },
  image_url: {
    type: String,
    required: false
  },
  source_url: {
    type: String,
    required: true
  }
});

// creates model from above schema -- ADDING COLLECTION NAME TO END HERE MADE IT FINALLY FIND THE RIGHT COLLECTION
var Meal = mongoose.model('Meal', MealSchema, 'Meal');

module.exports = Meal;