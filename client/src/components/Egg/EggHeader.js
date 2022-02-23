import React from 'react'
import eggimg from '../../images/egg.png'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const EggHeader = () => {
    return (
        <>
            <div>
                <img className='eggimg' src={eggimg}></img>
            </div>
            <div className='eggGrp'>Egg Groups</div>

            <div className='eggKm'> 2 km Egg</div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Item className='card'><img className='eggmon' src='https://img.pokemondb.net/artwork/bulbasaur.jpg'></img></Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <div className='eggKm'> 5 km Egg</div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Item className='card'><img className='eggmon' src='https://img.pokemondb.net/artwork/bulbasaur.jpg'></img></Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <div className='eggKm'> 7 km Egg</div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Item className='card'><img className='eggmon' src='https://img.pokemondb.net/artwork/bulbasaur.jpg'></img></Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <div className='eggKm'> 10 km Egg</div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Item className='card'><img className='eggmon' src='https://img.pokemondb.net/artwork/bulbasaur.jpg'></img></Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <div className='eggKm'> 12 km Egg</div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Item className='card'><img className='eggmon' src='https://img.pokemondb.net/artwork/bulbasaur.jpg'></img></Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>

        </>
    )
}

export default EggHeader;