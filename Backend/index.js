const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//Import routes

const playersRoute = require('./routes/players')

app.use('/players', playersRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to the BasketBall DataBase')
})

//Connect to db

mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, () => console.log('Connected to db!'));

app.listen(3000);