import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username :{
        type: string,
        require: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    pokemons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pokemon" }]
})

const User = mongoose.model('User', UserSchema);

export default User;