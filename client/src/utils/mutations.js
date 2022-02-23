import gql from "graphql-tag";

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
        }
    }
    `;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
        }
    }
    `;

export const SAVE_POKEMON = gql`
    mutation savePokemon($pokemon: SavedPokemonInput!) {
        savePokemon(pokemon: $pokemon) {
        username
        email
        pokemonCount
        savedPokemons {
            pokemon
            pokeId
            image
        }
        }
    }
    `;

export const REMOVE_POKEMON = gql`
    mutation removePokemon($pokemonId: String!) {
        removePokemon(pokemonId: $pokemonId) {
        username
        email
        pokemonCount
        savedPokemons {
            pokemon
            pokeId
            image
        }
        }
    }
    `;