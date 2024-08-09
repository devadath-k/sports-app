const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/games', require('./routes/gamesRoute'));

app.use(errorHandler)
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

