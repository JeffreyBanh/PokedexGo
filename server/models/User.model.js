const mongoose = require('mongoose');
const { Schema } = mongoose;

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

    pokemons: [{type: Schema.Types.ObjectId, ref: 'Pokemon'}]
},

{
    toJSON: {
        virtuals: true
    },
    id: false
});

const User = mongoose.model('User', UserSchema);

module.exports = User;