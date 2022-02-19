const { User, Pokemon } = require('../models');


const pokeomonController = {
    getAllPokemon(req, res) {
        Pokemon.find()
            .then(pokemon => res.json(pokemon))
            .catch(err => res.status(400).json('Error: ' + err));
    },

    getPokemonById({ params }, res) {
        Pokemon.find({ pokeid: params.id })
            .then(pokemon => res.json(pokemon))
            .catch(err => res.status(400).json('Error: ' + err));
    },

    deletePokemonById({ params }, res) {
        Pokemon.findOneAndDelete({ pokeid: params.id })
            .then(pokemon => res.json(pokemon))
            .catch(err => res.status(400).json('Error:' + err));
    },
    addPokemon(req, res) {
        const pokemon = req.body.pokemon;
        const pokeid = req.body.pokeid;

        const newPokemon = new Pokemon({
            pokemon,
            pokeid,
        })

        newPokemon.save()
            .then(() => res.json('Pokemon added'))
            .catch(err => res.status(400).json('Error' + err));
    }

}

module.exports = pokeomonController;
