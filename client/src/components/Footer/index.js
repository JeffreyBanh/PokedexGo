import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {FaGithub, FaLinkedin } from 'react-icons/fa'
import {
    FooterContainer, 
    FooterWrap, 
    SocialMedia, 
    SocialMediaWrap, 
    SocialLogo, 
    WebsiteRights, 
    SocialIcons, 
    SocialIconLink,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink} from './footerElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        {/* <FooterLinkItems>
                            <FooterLinkTitle>Example 1</FooterLinkTitle>
                                <FooterLink to = "/">TBD1</FooterLink>
                                <FooterLink to = "/">TBD2</FooterLink>
                                <FooterLink to = "/">TBD3</FooterLink>
                                <FooterLink to = "/">TBD4</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Example 2</FooterLinkTitle>
                                <FooterLink to = "/">TBD1</FooterLink>
                                <FooterLink to = "/">TBD2</FooterLink>
                                <FooterLink to = "/">TBD3</FooterLink>
                                <FooterLink to = "/">TBD4</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Example 3</FooterLinkTitle>
                                <FooterLink to = "/">TBD1</FooterLink>
                                <FooterLink to = "/">TBD2</FooterLink>
                                <FooterLink to = "/">TBD3</FooterLink>
                                <FooterLink to = "/">TBD4</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Example 4</FooterLinkTitle>
                                <FooterLink to = "/">TBD1</FooterLink>
                                <FooterLink to = "/">TBD2</FooterLink>
                                <FooterLink to = "/">TBD3</FooterLink>
                                <FooterLink to = "/">TBD4</FooterLink>
                        </FooterLinkItems> */}

                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to = '#' onClick = {toggleHome}>Pokedex Go</SocialLogo>
                        <WebsiteRights>Pokedex Go © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink 
                            href ="//www.github.com/JeffreyBanh/PokedexGo" 
                            target= "_blank" 
                            aria-label = "Github"> 
                            <FaGithub /></SocialIconLink>
                            <SocialIconLink 
                            href ="/" 
                            target= "_blank" 
                            aria-label = "Linkedin"> 
                            <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer