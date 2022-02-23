import React from 'react'
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const StatesBar = () => {
    return (
        <div className='bar'>
            <Stack sx={{ width: '100%' }} spacing={5}>
                <p className='barInfo'>
                    Attack <span className='barNmb'>37</span>
                </p>
                <LinearProgress variant="determinate" value={37} color="secondary" />
                <p className='barInfo'>
                    Defence <span className='barNmb'>28</span>
                </p>
                <LinearProgress variant="determinate" value={28} color="inherit" />
                <p className='barInfo'>
                    Health <span className='barNmb'>24</span>
                </p>
                <LinearProgress variant="determinate" value={24} color="success" />
            </Stack>
            <div className='pokeInfo'>Movesets</div>
            <div>
                <h1 className='fstmv'>Fast Moves</h1>
                <Stack className='movesContainer' spacing={2}>
                    <Item className='item'>Tackle<span>Type</span></Item>
                    <Item className='item'>Vine Whip<span>Type</span></Item>
                </Stack>
                <h1 className='fstmv'>Charge Moves</h1>
                <Stack className='movesContainer' spacing={2}>
                    <Item className='item'>Power Whip<span>Type</span></Item>
                    <Item className='item'>Seed Bomb<span>Type</span></Item>
                    <Item className='item'>Sludge Bomb<span>Type</span></Item>
                </Stack>
                
            </div>
        </div>

    )
}

export default StatesBar
