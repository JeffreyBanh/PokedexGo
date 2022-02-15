import React, {useState} from 'react';
import Video from '../../video/Video2.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import {Button} from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    
    return (
        <HeroContainer id = "home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />

            </HeroBg>
            <HeroContent>
                <HeroH1>
                </HeroH1>
                <HeroP>
                </HeroP>
                <HeroBtnWrapper>
                    {/* <Button 
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
                    About me {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button> */}
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
        );
};
export default HeroSection;