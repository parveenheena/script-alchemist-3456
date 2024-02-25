const express = require('express');
const { auth } = require('../middleware/auth.middleware');
const { QuestionModel } = require('../models/question.model');

const questionRouter = express.Router();
questionRouter.post('/', async (req,res) => {
 try{
   const questions = await QuestionModel.find(req.body).limit(10);
   res.status(200).send({questions});
 } catch(error) {
res.status(400).send({error});
 }
})

module.exports = {
    questionRouter
}