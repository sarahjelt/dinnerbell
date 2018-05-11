const router = require("express").Router();
const mealsController = require("../../controllers/mealsController");

router
  .route("/")
  .get(movieController.findAllUsers)
  .post(movieController.createUser);

module.exports = router;