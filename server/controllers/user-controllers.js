const { User, Pokemon } = require('../models');
const { signToken } = require('../utils/auth');

// const userController = {
//     getAllUsers(req, res) {
//         User.find({})
//             .then(pokemon => res.json(pokemon))
//             .catch(err => res.status(400).json('Error: ' + err));
//     },

//     createUser(req, res) {
//         const username = req.body.username;
//         const email = req.body.email;
//         const password = req.body.password;

//         const newUser = new User({
//             username,
//             email,
//             password,
//         });
//         newUser.save()
//         .then(() => res.json('User added'))
//         .catch(err => res.status(400).json('Error' + err));
//     },

//     getUserById({ params }, res) {
//         User.findOne({ _id: params.id })
//         .then(data => {
//             if (!data) {
//                 res.status(404).json({ message: 'No user found with that ID!' });
//                 return;
//             }
//             res.json(data);
//         })
//         .catch(err => res.status(500).json(err));
//     },

//     deleteUser({ params }, res) {
//         User.findOneAndDelete({ _id: params.id })
//         .then(data => {
//             if (!data) {
//                 res.status(404).json({ message: 'No user found with that ID.' });
//                 return;
//             }
//             return Pokemon.deleteMany({ _id: { $in: data.pokemon }})
//             .then(data => res.json(data))
//             .catch(err => res.status(500).json(err));
//         })
//         .catch(err => res.status(500).json(err));
//     }
// }


// module.exports = userController

//user-controller using token and graphql
module.exports = {
    // get a single user by either their id or their username
    async getSingleUser({ user = null, params }, res) {
        const foundUser = await User.findOne({
            $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
        });

        if (!foundUser) {
            return res.status(400).json({ message: 'Cannot find a user with this id!' });
        }

        res.json(foundUser);
    },
    // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
    async createUser({ body }, res) {
        const user = await User.create(body);

        if (!user) {
            return res.status(400).json({ message: 'Something is wrong!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },
    // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
    // {body} is destructured req.body
    async login({ body }, res) {
        const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
        if (!user) {
            return res.status(400).json({ message: "Can't find this user" });
        }

        const correctPw = await user.isCorrectPassword(body.password);

        if (!correctPw) {
            return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },
    // save a pokemon to a user's `savedPokemons` field by adding it to the set (to prevent duplicates)
    // user comes from `req.user` created in the auth middleware function
    async savePokemon({ user, body }, res) {
        console.log(user);
        try {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $addToSet: { savedPokemons: body } },
                { new: true, runValidators: true }
            );
            return res.json(updatedUser);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },
    // remove a pokemon from `savedBooks`
    async deletePokemon({ user, params }, res) {
        const updatedUser = await User.findOneAndUpdate(
            { _id: user._id },
            { $pull: { savedPokemons: { pokemonId: params.pokemonId } } },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "Couldn't find user with this id!" });
        }
        return res.json(updatedUser);
    },
};
