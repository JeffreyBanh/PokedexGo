import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {SidebarData} from './SidebarData';
import './Navbar.css'
import SubMenu from './subMenu';

import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    const changeNav = () => {
        if (window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
        <>
        <IconContext.Provider value = {{color: '#fff'}}>
            <Nav scrollNav = {scrollNav}>
                <NavbarContainer>
                    <div className = "navbar">
                        <Link to = "#" className = 'menu-bars'>
                            <FaIcons.FaBars onClick = {showSidebar}/>
                        </Link>
                    </div>
                    <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className = 'nav-menu-items' >
                            <li className = "navbar-toggle">
                            <Link to ="#" className = 'menu-bars'>
                                <AiIcons.AiOutlineClose onClick = {showSidebar}/>
                            
                            </Link>
                            </li>
                            {SidebarData.map((item, index) => {
                                return <SubMenu item = {item} key = {index}/>;
                                    // <li key = {index} className = {item.className}>
                                    //     <Link to= {item.path}>
                                    //         {item.icon}
                                    //         <span>{item.title}</span>
                                    //     </Link>
                                    // </li>
                            })}
                        </ul>
                    </nav>
                    <NavLogo to='/pokedexgo' onClick= {toggleHome}>Pokedex Go</NavLogo>
                    {/* <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon> */}
                    {/* <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to='about'
                            smooth = {true} 
                            duration = {500}
                            spy = {true}
                            exact = 'true'
                            offset = {-80}
                            activeClass = "active"
                            ></NavLinks>
                        </NavItem>
                    </NavMenu> */}
                    <NavBtn>
                        <NavBtnLink to = "/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar;