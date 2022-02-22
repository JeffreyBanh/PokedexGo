import React from 'react'
import Table from './InfoTable'
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import StatsBar from './StatsBar';
export default function PokemonInfo() {
    return (
        <>
            <div className='pokeInfo'>Pokemon Stats</div>
            <Table />

            <StatsBar />
        </>
    )
}
