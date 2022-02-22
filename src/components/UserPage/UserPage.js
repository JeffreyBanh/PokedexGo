import React from 'react'
import Img1 from '../../images/Sword_Shield.png'
import './style.css'
import ReactAudioPlayer from 'react-audio-player';
import UserImage from './UserImage';
import UserTable from './UserTable';
import BasicTable from '../PokemonPage/InfoTable'
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
                <ImageBg src={Img1} />
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