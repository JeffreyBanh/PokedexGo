import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/PokedexHeroSection';
import Footer from '../components/Footer'

const pokedexgo = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Footer />
        </>
    )
}

export default pokedexgo