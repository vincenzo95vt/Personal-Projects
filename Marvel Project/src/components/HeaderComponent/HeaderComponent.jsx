import React, { useState } from 'react'
import "./HeaderComponent.css"
import { fetchMarvelCharByName } from '../../core/services/services'

const HeaderComponent = () => {
  const [character, setCharacter] = useState(undefined)


  const handlerSearchCharacter = (e) =>{
    setCharacter(e.target.value)
  }

  const searchCharacter = async () => {
    const fetchCharacter = await fetchMarvelCharByName(character)
    console.log(fetchCharacter)

  }

  return (
    <div className='header'>
        <div className='bg'>
            <img src="marvel.svg" alt="" />
        </div>
        <div >
            <input type="text" placeholder='Search Here' className='search' onChange={(e) => handlerSearchCharacter(e)}/>
            <button onClick={() => searchCharacter() }> Search</button>
        </div>
        <div className='bg2-capam'>
            <img src="captain_america.svg" alt="" />
        </div>
    </div>
  )
}

export default HeaderComponent
