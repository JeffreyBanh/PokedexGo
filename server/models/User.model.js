const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const PokemonSchema = require('./Pokemon.model')

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required'],
            unique: true,
            trim: true,
            minlength: 3
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'Email is required'],
            match: [/^([\w]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Invalid input']
        },
        password: {
            type: String,
            required: true,
            minlength: 3
        },

        // pokemons: [{type: Schema.Types.ObjectId, ref: 'Pokemon'}]
        savedPokemons: [PokemonSchema],
    },

        {
            toJSON: {
                virtuals: true
            },
            id: false
    }
    );

// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
userSchema.virtual('pokemonCount').get(function () {
    return this.savedPokemons.length;
});

const User = model('User', userSchema);

module.exports = User;