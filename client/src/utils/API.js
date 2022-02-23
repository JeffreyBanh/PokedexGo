// route to get logged in user's info (needs the token)
export const getMe = (token) => {
    return fetch('/api/users/me', {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
    });
};

export const createUser = (userData) => {
    return fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

export const loginUser = (userData) => {
    return fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

// save book data for a logged in user
export const savePokemon = (pokemonData, token) => {
    return fetch('/api/users', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(pokemonData),
    });
};

// remove saved book data for a logged in user
export const deletePokemon = (pokemonId, token) => {
    return fetch(`/api/users/books/${pokemonId}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
};

// // make a search to google books api
// // https://www.googleapis.com/books/v1/volumes?q=harry+potter
// export const searchGoogleBooks = (query) => {
//     return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
// };

export const searchPokemonName = () => {
    return fetch("https://pokemon-go1.p.rapidapi.com/pokemon_names.json", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "pokemon-go1.p.rapidapi.com",
            "x-rapidapi-key": "cb11f2ee2fmsha08fecdbc24fd3cp11b47bjsn82e3b7599a4d"
        }
    })
}

export const getPokemonType = () => {
    return fetch("https://pokemon-go1.p.rapidapi.com/pokemon_types.json", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "pokemon-go1.p.rapidapi.com",
            "x-rapidapi-key": "cb11f2ee2fmsha08fecdbc24fd3cp11b47bjsn82e3b7599a4d"
        }
    })
}


export const getPokemonType = () => {
    return fetch("https://pokemon-go1.p.rapidapi.com/pokemon_stats.json", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "pokemon-go1.p.rapidapi.com",
            "x-rapidapi-key": "cb11f2ee2fmsha08fecdbc24fd3cp11b47bjsn82e3b7599a4d"
        }
    })
}