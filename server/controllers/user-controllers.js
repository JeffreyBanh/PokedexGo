const { User, Pokemon } = require('../models')

const userController = {
    getAllUsers(req, res) {
        User.find({})
            .then(pokemon => res.json(pokemon))
            .catch(err => res.status(400).json('Error: ' + err));
    },

    createUser(req, res) {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const newUser = new User({
            username,
            email,
            password,
        });
        newUser.save()
        .then(() => res.json('User added'))
        .catch(err => res.status(400).json('Error' + err));
    },

    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .then(data => {
            if (!data) {
                res.status(404).json({ message: 'No user found with that ID!' });
                return;
            }
            res.json(data);
        })
        .catch(err => res.status(500).json(err));
    },
    
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(data => {
            if (!data) {
                res.status(404).json({ message: 'No user found with that ID.' });
                return;
            }
            return Pokemon.deleteMany({ _id: { $in: data.pokemon }})
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err));
        })
        .catch(err => res.status(500).json(err));
    }
}


module.exports = userController