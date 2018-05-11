const db = require("../models");

module.exports = {
    findAllMeals: function(req, res) {
        db.Meal
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    }
    // findMealImageURL: function(req, res) {
    //     db.Meal
    //         .find({ image_url: {$in: req.params.name } })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err))
    // }
}