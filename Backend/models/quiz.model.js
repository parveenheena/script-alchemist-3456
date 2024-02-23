const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
    language: { type: String, required: true},
    duration: { type: String, required: true }, 
    number_of_questions: { type: Number, required: true } 
}, {
    versionKey: false
});

const QuizModel = mongoose.model("quiz", quizSchema); 

module.exports = {
    QuizModel
};
