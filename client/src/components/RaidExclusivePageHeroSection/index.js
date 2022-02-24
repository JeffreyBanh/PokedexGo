import React, {useState} from 'react';
import Img1 from '../../images/Sword_Shield.png'
import '../style.css'
import RaidTable from '../RaidExclusive/RaidExclusiveDataTable';
import '../table.css'

import { 
    HeroContainer, 
    HeroBg, 
    HeroContent, 
    ImageBg, } from './raidElements';

const RaidExclusiveHeroSection = () => {
    return (
        <HeroContainer id = "raid">
            <HeroBg>
                <ImageBg src = {Img1}  />
            </HeroBg>
            <HeroContent>
                <RaidTable />
            </HeroContent>
        </HeroContainer>
        );
};
export default RaidExclusiveHeroSection;