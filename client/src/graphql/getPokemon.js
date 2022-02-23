import gql from 'graphql-tag';

export const getPokemon = gql`
        query MyQuery {
            pokemon_v2_pokemon {
            id
            name
            }
        }
`