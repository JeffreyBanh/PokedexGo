import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/PokedexHeroSection';
import Pokemon from '../components/Pokemons';

const pokedexgo = () => {
    return (
        <>
        <Navbar />
        <HeroSection />
        <Pokemon />
        </>
    )
}

export default pokedexgo