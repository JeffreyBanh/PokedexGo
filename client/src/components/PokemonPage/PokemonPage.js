import React from 'react'
import Img2 from '../../images/img2.jpg'
import './tablestyle.css'
import ReactAudioPlayer from 'react-audio-player';
import PokemonImage from './PokemonImage';
import PokemonInfo from './PokemonInfo';
import StatesBar from './StatsBar';

import {
    HeroContainer,
    HeroBg,
    HeroContent2,
    ImageBg,
} from '../PokemonHeroSection/PokemonHeroSectionElements';

const PokemonPage = () => {

    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg src={Img2} />
                <ReactAudioPlayer />
            </HeroBg>
            <HeroContent2>
                <PokemonImage />
                <PokemonInfo />
                
                <button className='button' type='submit'>
                    Add Pokemon
                </button>
            </HeroContent2>
        </HeroContainer>
    )
};
export default PokemonPage;