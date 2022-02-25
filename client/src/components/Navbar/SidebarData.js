import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import React, {useEffect, useState} from 'react';
import * as RiIcons from 'react-icons/ri'
import * as MdIcons from 'react-icons/md'
import * as SiIcons from 'react-icons/si'
import * as ImIcons from 'react-icons/im'

export const SidebarData = [
    {
        title: 'Overview',
        path: '#',
        icon: <ImIcons.ImBinoculars />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        className: 'nav-text',
        subNav:
        
        [
            {
                title: 'Home Page',
                path: '/pokedexgo',
                icon: <AiIcons.AiFillHome/>,
            },
            {
                title: 'Profile',
                path: '/pokedexgo/user',
                icon: <FaIcons.FaUser/>,
            }
        ]
    },
    {
        title: 'Pokemon',
        path: '#',
        icon: <MdIcons.MdOutlineCatchingPokemon />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        className: 'nav-text',
        subNav:[
            {
                title: 'Pokemon List',
                path: '/pokedexgo/pokedexList',
                icon: <FaIcons.FaUser/>,
            },
            {
                title: 'Raid Exclusive Pokemon',
                path: '/pokedexgo/raidExclusive',
                icon: <SiIcons.SiNodemon/>,
            },
        ]
    },
    {
        title: 'Egg',
        path: '#',
        path: '/pokedexgo/eggs',
        icon: <FaIcons.FaEgg/>,
        className: 'nav-text'
    },
    {
        title: 'CP Calulator',
        path: '#',
        icon: <FaIcons.FaCalculator />,
        className: 'nav-text'
    },
]