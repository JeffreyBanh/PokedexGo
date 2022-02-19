const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
    pokemon :{
        type: String,
        require: true
    },

    pokeid:{
        type: Number,
    },

    user: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    id: false
})

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

module.exports = Pokemon;