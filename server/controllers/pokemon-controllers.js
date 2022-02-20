const { User, Pokemon } = require('../models');


const pokeomonController = {
    getAllPokemon(req, res) {
        Pokemon.find()
            .then(pokemon => res.json(pokemon))
            .catch(err => res.status(400).json('Error: ' + err));
    },

    getPokemonById({ params }, res) {
        Pokemon.find({ _id: params.id })
            .then(pokemon => res.json(pokemon))
            .catch(err => res.status(400).json('Error: ' + err));
    },

    addPokemon({ body }, res) {
        Pokemon.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate({ _id: body.userId }, { $push: { pokemons: _id }}, {new: true});
            })
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err));
    },

    deletePokemonById({ params }, res) {
        Pokemon.findOneAndDelete({ _id: params.id })
        .then((data) => {
            if(!data) {
                res.status(404).json({message: 'No pokemon found with ID.'})
                return
            }
            return User.findOneAndUpdate({ _id: body.userId }, { $pull: { pokemons: _id }}, { new: true })
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err));
        })
        .catch(err => res.status(500).json(err));
    },
   // addPokemon(req, res) {
    //     const pokemon = req.body.pokemon;
    //     const pokeid = req.body.pokeid;

    //     const newPokemon = new Pokemon({
    //         pokemon,
    //         pokeid,
    //     })

    //     newPokemon.save()
    //         .then(() => res.json('Pokemon added'))
    //         .catch(err => res.status(400).json('Error' + err));
    // },
}

module.exports = pokeomonController;
