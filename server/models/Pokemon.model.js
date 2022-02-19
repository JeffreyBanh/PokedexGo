import mongoose from 'mongoose';

const PokemonSchema = new mongoose.Schema({
    pokemon :{
        type: string,
        require: true
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
})

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

export default Pokemon;