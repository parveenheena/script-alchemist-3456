const mongoose = require("mongoose");

// Define the schema for the objects inside the array
const quizInfoSchema = mongoose.Schema({
  language: { type: String, ref: "quizz" },
  score: { type: Number },
});

const userSchema = mongoose.Schema(
  {
    username: { type: String },
    fullName: { type: String },
    country: { type: String },
    mobileNo: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    about: { type: String, default: "Hi There" },
    quizInfo: [quizInfoSchema],
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = {
  UserModel,
};
