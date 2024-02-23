const mongoose = require("mongoose");

// Define the schema for the objects inside the array
const quizInfoSchema = mongoose.Schema({
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'quizzes' },
    score: { type: Number }
});

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    fullName: { type: String, required: true },
    country: { type: String, required: true },
    mobileNo: { type: String, required: true }, 
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    about: { type: String, default: 'Hi There' },
    quizInfo: [quizInfoSchema] // Define the array of objects using the schema
}, {
    versionKey: false
});

const UserModel = mongoose.model("User", userSchema); 

module.exports = {
    UserModel
};
