import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/PokedexHeroSection';
import Pokemon from '../components/Pokemons';
import Footer from '../components/Footer'

const pokedexgo = () => {
    return (
        <>
        <Navbar />
        <HeroSection />
        {/* <Pokemon /> */}
        <Footer />
        </>
    )
}

export default pokedexgo