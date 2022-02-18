import React from 'react'
import {PokemonsContainer, PokemonsH1, PokemonsWrapper, PokemonsCard, PokemonsIcon, PokemonsH2, PokemonsP} from './pokemonElements';
import Icon1 from '../../images/pokemon-bulbasaur.jpg';
import Icon2 from '../../images/pokemon-ivysaur.png';
import Icon3 from '../../images/pokemon-venusaur.jfif';
import { BasicTable } from '../BasicTable'

const Pokemon = () => {
    return (
        <PokemonsContainer id="Pokemon">
            <PokemonsH1>Projects</PokemonsH1>
            <PokemonsWrapper>
                <PokemonsCard 
                >
                    <PokemonsIcon src={Icon1} />
                    <PokemonsH2>Bulbasaur</PokemonsH2>
                    <PokemonsP></PokemonsP>
                </PokemonsCard>
                <PokemonsCard
                >
                    <PokemonsIcon src={Icon2} />
                    <PokemonsH2>Bulbasaur</PokemonsH2>
                    <PokemonsP></PokemonsP>
                </PokemonsCard>
                <PokemonsCard 
                >
                    <PokemonsIcon src={Icon3} />
                    <PokemonsH2>Bulbasaur</PokemonsH2>
                    <PokemonsP></PokemonsP>
                </PokemonsCard>
            </PokemonsWrapper>
        </PokemonsContainer>
    )
}

export default Pokemon