import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as LinkRouter} from 'react-router-dom';
export const PokemonsContainer = styled.div`
    height: 1080px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const PokemonsWrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    justify-content: center;


    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-tempalte-columns: 1fr
        padding: 0 20px;
    }
`

export const PokemonsCard = styled.a`
    cursor: pointer;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    color: black;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const PokemonsIcon = styled.img`
    height: 160px;
    width: 340px;
    margin-bottom: 10px;
`

export const PokemonsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const PokemonsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const PokemonsP = styled.p`
    font-size: 1rem;
    text-align: center;
`

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 8px;
    }
`