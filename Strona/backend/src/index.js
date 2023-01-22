
require('./models/Customer');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser =  require('body-parser');
const authRoutes =  require('./routes/authRoutes');
const cors = require('cors');
require('dotenv').config()


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
    console.log("Connected to mongo instance");
});

mongoose.connection.on('error', (err) => {
    console.log("Error connecting to mongo ", err);
});

app.listen(3002, () => {
    console.log("Listening on port 3002")
});

module.exports = app;