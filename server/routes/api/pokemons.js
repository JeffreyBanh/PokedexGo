const router = require('express').Router();

const {
    getAllPokemon,
    getPokemonById,
    addPokemon,
    deletePokemonById,
} = require('../../controllers/pokemon-controllers')

router
    .route('/')
    .get(getAllPokemon)
    .post(addPokemon);

router
    .route('/:id')
    .get(getPokemonById)
    .delete(deletePokemonById);


module.exports = router;