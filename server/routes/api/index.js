const router = require('express').Router();
const pokemonRouter = require('./pokemons');
const userRouter = require('./users');

router.use('/pokemons', pokemonRouter);
router.use('/users', userRouter);

module.exports = router;