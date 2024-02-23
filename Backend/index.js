const express = require("express");
require("dotenv").config();
const {connection} = require("./config/db");
const {userRouter} = require('./routes/user.route');
const cors = require("cors");
const { quizRouter } = require("./routes/quiz.route");
const { questionRouter } = require("./routes/question.route");

const app = express();
app.use(express.json());
app.use(cors());
app.use('/Users', userRouter);
app.use('/quizzes',quizRouter);
app.use('/questions',questionRouter)

app.listen(process.env.port, async () => {
    try{
        await connection;
        console.log(`Server is running at port ${process.env.port}`);
    } catch(err){
        console.log(err);
    }
});