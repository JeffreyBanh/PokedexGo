import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    //height: 1080px;
    //height: 100%
    position: relative;
    z-index: 1;    
    :before{
        content: '',
        position: absolute,
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const HeroBg = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    background: #232a34;
    object-fit: cover;
    background-attachment: fixed;
    background-position: center;
`

export const HeroContent = styled.div`
    background: #fff;
    margin-top: 80px;
    margin-bottom: 80px;
    z-index: 3;
    width: 65%;
    height: auto;
    position: flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
export const HeroContent2 = styled.div`
    background: #eee;
    margin-top: 80px;
    border-radius: 1rem;
    // border: 5px solid black;
    z-index: 3;
    width: 65%;
    height: auto;
    position: flex;
    display: flex;
    flex-direction: column;
    
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

