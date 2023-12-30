const express = require("express");
const { postAnswer,getAllAnswersWithQuestions } = require("../controller/answerController");
const Router = express.Router();
const { protect } = require("../controller/authController");

Router.route("/questions/:questionId/answers").post(protect, postAnswer)
Router.route("/questions/:questionId/answers").get(protect,getAllAnswersWithQuestions)

module.exports = Router; // Export the Router instance directly
