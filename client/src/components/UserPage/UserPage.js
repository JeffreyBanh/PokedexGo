import React from 'react'
import Img2 from '../../images/img2.jpg'
import './style.css'
import ReactAudioPlayer from 'react-audio-player';
import UserImage from './UserImage';
import UserTable from './UserTable';

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
                <UserImage />
                <UserTable />
            </HeroContent2>
        </HeroContainer>
    )
};
export default UserPage;