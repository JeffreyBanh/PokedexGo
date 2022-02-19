import React, {useState} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Music from '../../music/Go.mp3'
import Img1 from '../../images/Sword_Shield.png'
import {Button3} from '../ButtonElements';
import BasicTable from '../BasicTable'
import '../style.css'
import {FaSearch} from 'react-icons/fa'

import { 
    HeroContainer, 
    HeroBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight, 
    ImageBg,
    Wrapper,
    searchWrapper,
    searchInput,
    searchIcon } from './HeroElements';

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
                    <div class = "wrapper">
                        <div class = "search-input">
                            <input type = "text" placeholder = "Search for a pokemon...">
                                
                            </input>
                            <div class = "autocom-box">
                                <li>TBD</li>
                                <li>TBD</li>
                            </div>
                            <div class = "icon"><FaSearch/></div>
                        </div>
                    </div>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
        );
};
export default HeroSection;