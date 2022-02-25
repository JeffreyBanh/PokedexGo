import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './tablestyle.css'
import { textAlign } from '@mui/system';
import Grid from '@mui/material/Grid';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ width: 500, height: 200 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <>
            <div className='pokemonName'>
                <h1 className='pokemonName'>Bulbasaur</h1>
            </div>
            <Box className='tab' sx={{ bgcolor: 'background.paper', width: "100%" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <SwipeableViews className="panel"

                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                        >
                            <TabPanel style={{ height: "200vw" }} className="panel" value={value} index={0} dir={theme.direction}>
                                <img className='pokeimage' style={{ position: "relative" }} item xs={2} src='https://img.pokemondb.net/artwork/bulbasaur.jpg'></img>
                            </TabPanel>
                            <TabPanel style={{ height: "50vw" }} value={value} index={1} dir={theme.direction}>
                            <img className='pokeimage' style={{ position: "relative" }} item xs={2} src='https://img.pokemondb.net/artwork/bulbasaur.jpg'></img>
                            </TabPanel>
                        </SwipeableViews>
                        <AppBar position="static">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="secondary"
                                textColor="inherit"
                                variant="fullWidth"
                            >
                                <Tab label="Original" {...a11yProps(0)} />
                                <Tab label="Shiny" {...a11yProps(1)} />
                            </Tabs>
                        </AppBar>
                    </Grid>
                </Grid>
            </Box>
            
        </>

    );
}