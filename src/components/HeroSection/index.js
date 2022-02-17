import React, {useState} from 'react';
import Video from '../../video/Video2.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import {Button} from '../ButtonElements';
import ReactAudioPlayer from 'react-audio-player';
import Music from '../../music/Go.mp3'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    
    return (
        <HeroContainer id = "home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                <ReactAudioPlayer autoPlay loop controls src = {Music} type ='audio/mp3' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                </HeroH1>
                <HeroP>
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to= 'about'
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
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
        );
};
export default HeroSection;