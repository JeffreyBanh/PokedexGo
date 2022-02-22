import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import React, {useEffect, useState} from 'react';
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as MdIcons from 'react-icons/md'
import * as SiIcons from 'react-icons/si'
// import * as BsIcons from 'react-icons/Bs'
import * as GrIcons from 'react-icons/gr'
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
                path: '/pokedexgo/users',
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
                path: '/pokedexgo/users',
                icon: <SiIcons.SiNodemon/>,
            },
        ]
    },
    {
        title: 'Egg',
        path: '/',
        icon: <FaIcons.FaEgg/>,
        className: 'nav-text'
    },
    {
        title: 'CP Calulator',
        path: '/',
        icon: <FaIcons.FaCalculator />,
        className: 'nav-text'
    },
]