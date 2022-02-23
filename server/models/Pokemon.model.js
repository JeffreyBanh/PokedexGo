const { Schema } = require('mongoose');

const PokemonSchema = new Schema({
    //name
    pokemon :{
        type: String,
        require: true
    },

    pokeId:{
        type: Number,
    },

    image: {
        type:String,
    },

//     user: { 
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//     },
//     id: false
// },
// {
//     toJSON: {
//         virtuals: true,
//         getters: true
//     },
//     id: false

});

// const Pokemon = mongoose.model('Pokemon', PokemonSchema);

module.exports = PokemonSchema;