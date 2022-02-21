import React, {useState} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Img1 from '../../images/Sword_Shield.png'
import BasicTable from '../BasicTable'
import '../style.css'

import { 
    HeroContainer, 
    HeroBg, 
    HeroContent, 
    ImageBg, } from './PokemonHeroSectionElements';

const PokemonHeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    
    return (
        <HeroContainer id = "home">
            <HeroBg>
                <ImageBg src = {Img1}  />
                <ReactAudioPlayer/>
            </HeroBg>
            <HeroContent>
                <BasicTable />
            </HeroContent>
        </HeroContainer>
        );
};
export default PokemonHeroSection;