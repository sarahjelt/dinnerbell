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
  }
});

const Meal = mongoose.model('Meal', MealSchema);

module.exports = Meal;