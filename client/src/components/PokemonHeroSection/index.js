import React, {useState} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Img1 from '../../images/Sword_Shield.png'
import '../style.css'
import Table from '../Table';
import '../table.css'
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
                <Table />
                {/* <Button /> */}
            </HeroContent>
        </HeroContainer>
        );
};
export default PokemonHeroSection;