const express = require("express");
require("dotenv").config();
const {connection} = require("./config/db");
const {userRouter} = require('./routes/user.route');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use('/Users', userRouter);

app.listen(process.env.port, async () => {
    try{
        await connection;
        console.log(`Server is running at port ${process.env.port}`);
    } catch(err){
        console.log(err);
    }
});