const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
    "question": { type: String },
    "options": [
        String
    ],
    "correct_answer": { type: String },
    "description": { type: String },
    "language": { type: String }
}
    , {
        versionKey: false
    });

const QuestionModel = mongoose.model("question", questionSchema);

module.exports = {
    QuestionModel
};
