import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/get-pokemons';
import { Pokemon } from '../components/Pokemon';

export function PokemonsContainer() {

    // const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    //     variables: { first: 900 },
    // });
    const { loading, error,data} = useQuery(GET_POKEMONS,{
        variables: {first: 900},
        suspense: true
    });
    if (loading) return null;
    if (error) return `Error! ${error}`;
    return (
            // pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)
            // pokemons && pokemons.map(pokemon => pokemon)
            data.pokemons
    )

}
