import React, {useState} from 'react';
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, ImageBg } from './HeroElements';
import ReactAudioPlayer from 'react-audio-player';
import Music from '../../music/Go.mp3'
import Img1 from '../../images/Sword_Shield.png'
import {Button3} from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    
    return (
        <HeroContainer id = "home">
            <HeroBg>
                <ImageBg src = {Img1}  />
                <ReactAudioPlayer autoPlay loop controls volume = {0} src = {Music} type = 'audio/mp3' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                </HeroH1>
                <HeroP>
                </HeroP>
                <HeroBtnWrapper>
                    {/* <Button3 
                    to= '/pokedexgo'
                    onMouseEnter = {onHover} 
                    onMouseLeave={onHover}
                    smooth = {true}
                    duration = {500}
                    spy = {true}
                    exact = "true"
                    offset = {-80}
                    primary = "true"
                    dark = "true"
                    >
                    Ready? {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button3> */}
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
        );
};
export default HeroSection;