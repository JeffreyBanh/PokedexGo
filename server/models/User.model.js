const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username :{
        type: String,
        require: [true, 'Username is required'],
        unique: true,
        trim: true,
        minlength: 3
    },
    email:{
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        match:[/^([\w]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Invalid input']
    },
    password :{
        type: String,
        require: true,
        minlength: 3
    },

    pokemons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pokemon" }]
},

{
    toJSON: {
        virtuals: true
    },
    id: false
});

UserSchema.virtual('pokemonCount').get(function(){
    return this.pokemons.length;
});


const User = mongoose.model('User', UserSchema);

module.exports = User;