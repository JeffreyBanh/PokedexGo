const router = require('express').Router();
let Pokemon = require('../models/Pokemon.model');

router.route('/').get((req, res) => {
    Pokemon.find()
        .then(pokemon => res.json(pokemon))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Pokemon.find({pokeid: req.params.id})
        .then(pokemon => res.json(pokemon))
        .catch(err => res.status(400).json('Error:' + err));
})

router.route('/:id').delete((req, res) => {
    Pokemon.findOneAndDelete({pokeid: req.params.id})
        .then(pokemon => res.json(pokemon))
        .catch(err => res.status(400).json('Error:' + err));
})

router.route('/add').post((req, res) => {
    const pokemon = req.body.pokemon;
    const pokeid = req.body.pokeid;

    const newPokemon = new Pokemon({
        pokemon,
        pokeid,
    })

    newPokemon.save()
        .then(() => res.json('Pokemon added'))
        .catch(err => res.status(400).json('Error' + err));
});

module.exports = router;