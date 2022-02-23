import React from 'react'
import eggimg from '../../images/egg.png'
const EggHeader = () => {
    return (
        <>
            <div>
                <img className='eggimg' src={eggimg}></img>
            </div>
            <div className='eggGrp'>Egg Groups</div>
            <div className='pokemon'>Saved Pokemons</div>
        </>
    )
}

export default EggHeader;