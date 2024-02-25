const express = require("express");
const { UserModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { auth } = require("../middleware/auth.middleware");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { username, fullName, country, mobileNo, email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    bcrypt.hash(password, 8, async (err, hash) => {
      if (hash) {
        const user = new UserModel({
          username,
          fullName,
          country,
          mobileNo,
          email,
          password: hash,
        });
        await user.save();
        res.send({ msg: "new user has been registered" });
      } else {
        res.send({ error: err });
      }
    });
  } catch (err) {
    res.send({ error: err });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    bcrypt.compare(password, user.password, async (err, result) => {
      if (result) {
        const token = jwt.sign(
          { userId: user._id, author: user.username },
          "masai"
        );
        res.send({ msg: "Login Successfull", token: token, userDetails: user });
      } else {
        res.send({ msg: err });
      }
    });
  } catch (err) {
    res.send({ msg: err });
  }
});

userRouter.patch("/:userId", auth, async (req, res) => {
  const { userId, language, score } = req.body;
  console.log(userId);
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    user.quizInfo.push({ language: language, score: score });
    await user.save();
    res.status(200).json({ msg: "updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error" });
  }
});

userRouter.get("/:userId", auth, async (req, res) => {
    const {userId} = req.params;
  
  try {
    const user = await UserModel.findOne({_id:userId});
    res.status(200).json({ quizInfo:user.quizInfo });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error" });
  }
});


module.exports = {
  userRouter,
};
