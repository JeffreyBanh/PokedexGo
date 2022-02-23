export const getSavedPokemonIds = () => {
    const savedPokemonIds = localStorage.getItem('saved_pokemons')
        ? JSON.parse(localStorage.getItem('saved_pokemons'))
        : [];

    return savedPokemonIds;
};

export const savePokemonIds = (pokemonIdArr) => {
    if (pokemonIdArr.length) {
        localStorage.setItem('saved_pokemons', JSON.stringify(pokemonIdArr));
    } else {
        localStorage.removeItem('saved_pokemons');
    }
};

export const removePokemonId = (pokemonId) => {
    const savedPokemonIds = localStorage.getItem('saved_pokemons')
        ? JSON.parse(localStorage.getItem('saved_pokemons'))
        : null;

    if (!savedPokemonIds) {
        return false;
    }

    const updatedSavedPokemonIds = savedPokemonIds?.filter((savedPokemonId) => savedPokemonId !== pokemonId);
    localStorage.setItem('saved_pokemons', JSON.stringify(updatedSavedPokemonIds));

    return true;
};
