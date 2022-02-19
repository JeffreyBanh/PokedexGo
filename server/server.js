const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})

const pokemonRouter = require('./routes/pokemons');
const userRouter = require('./routes/users');

app.use('/pokemons', pokemonRouter);
app.use('/users', userRouter);


app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});