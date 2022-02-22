import React from 'react'
import userimg from '../../images/userImage.svg'
const UserPage = () => {
    return (
        <>
            <div>
                <img className='userimg' src={userimg}></img>
            </div>
            <div className='username'>Username</div>
            <div className='pokemon'>Saved Pokemons</div>
        </>
    )
}

export default UserPage;