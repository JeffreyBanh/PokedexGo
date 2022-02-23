const { gql } = require('apollo-server-express');

// typeDefs
const typeDefs = gql`
    type Pokemon {
        _id: ID
        pokemon: String
        pokeId: String
        image: String
    }
    type User {
        _id: ID
        username: String
        email: String
        pokemonCount: Int
        savedPokemons: [Pokemon]        
    }
    type Query {
        me: User
    }
    type Auth {
    token: ID!
    user: User
    }
    input SavedPokemonInput{
        pokemon: String
        pokeId: String
        image: String
    }
    type Mutation{
        login(email:String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        savePokemon(pokemon: SavedPokemonInput): User
        removePokemon(pokemonId: String!): User
    }
    `;

// export the typeDefs
module.exports = typeDefs;