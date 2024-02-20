const express = require('express');
require('dotenv').config();

const app = express();

app.listen(process.env.port, async (req, res) => {
    console.log(`Server is running at Port ${process.env.port}`);
});
