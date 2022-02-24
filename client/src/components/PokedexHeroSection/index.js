import React, { useState } from 'react';
import Img1 from '../../images/Sword_Shield.png'
import '../style.css'
import { FaSearch } from 'react-icons/fa'
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ImageBg,
} from './HeroElements';

const HeroSection = () => {
    
    return (
        <HeroContainer id="home">
            <HeroBg>
                <ImageBg src={Img1} />
            </HeroBg>

            <HeroContent>
                <HeroH1>
                </HeroH1>
                <HeroP>
                </HeroP>
                <HeroBtnWrapper>
                    <div className="wrapper">
                        <div className="search-input">
                            <input type="text" placeholder="Search for a pokemon..." />
                            <div className="autocom-box">
                                <li>TBD</li>
                                <li>TBD</li>
                            </div>
                            <div className="icon"><FaSearch /></div>
                        </div>
                    </div>
                </HeroBtnWrapper>

            </HeroContent>

        </HeroContainer>
    );
};

export default HeroSection;