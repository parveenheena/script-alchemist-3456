const express = require('express');
const { auth } = require('../middleware/auth.middleware');
const { QuizModel } = require('../models/quiz.model');
const quizRouter = express.Router();

quizRouter.get('/', async (req,res)=> {
    try{
         const quiz = await QuizModel.find();
         res.status(200).send({quiz})
    } catch(error) {
         res.status(400).send({error})
    }
})

quizRouter.get('/:id', async (req,res)=> {
     const {id} = req.params;
     try{
          const quiz = await QuizModel.findOne({_id:id});
          res.status(200).send({quiz})
     } catch(error) {
          res.status(400).send({error})
     }
 })

module.exports = {quizRouter};