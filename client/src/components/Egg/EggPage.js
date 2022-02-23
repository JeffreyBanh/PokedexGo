import React from 'react'
import Img2 from '../../images/img2.jpg'
import './style.css'
import ReactAudioPlayer from 'react-audio-player';
import EggHeader from './EggHeader';

import {
    HeroContainer,
    HeroBg,
    HeroContent2,
    ImageBg,
} from '../PokemonHeroSection/PokemonHeroSectionElements';

const UserPage = () => {

    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg src={Img2} />
                <ReactAudioPlayer />
            </HeroBg>
            <HeroContent2>
                <EggHeader />
            </HeroContent2>
        </HeroContainer>
    )
};
export default UserPage;