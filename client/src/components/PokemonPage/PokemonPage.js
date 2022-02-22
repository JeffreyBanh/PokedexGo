import React from 'react'
import Img1 from '../../images/Sword_Shield.png'
import '../style.css'
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
                <ImageBg src={Img1} />
                <ReactAudioPlayer />
            </HeroBg>
            <HeroContent2>
                <PokemonImage />
                <PokemonInfo />
            </HeroContent2>
        </HeroContainer>
    )
};
export default PokemonPage;