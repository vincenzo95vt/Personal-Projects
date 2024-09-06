import React, { useState } from 'react'
import "./HeaderComponent.css"
import { fetchMarvelCharByName } from '../../core/services/services'
import { useDispatch } from 'react-redux'
import { setLoading, showMarvelCharacter } from '../MainComponent/MainComponentAction'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { showSection } from '../SelectionMenuComponent/SectionAction'
const HeaderComponent = () => {
  const [character, setCharacter] = useState(undefined)
  const [info, setInfo] = useState(undefined)
  const [gradientPos, setGradientPos] = useState({x: 50, y: 50})

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handlerSearchCharacter = (e) =>{
    setCharacter(e.target.value)
  }

  const searchCharacter = async () => {
    dispatch(setLoading(true))
    try {
      const fetchCharacter = await fetchMarvelCharByName(character)
      dispatch(showMarvelCharacter(fetchCharacter.data.results))
      
    } catch (error) {
      console.error(error.message)
    }finally{
      dispatch(setLoading(false))
    }
  }

  const mainPage = () => {
    dispatch(showMarvelCharacter(undefined))
    navigate("/")
  }

  const handleChangeSection = (section) =>{
    dispatch(showSection(section))
  }

  return (
    <div className='header'>
        <div className='bg' onClick={() => mainPage()}>
            <img src="marvel.svg" alt="" />
        </div>
        <div >
            <input type="text" placeholder='Search Here' className='search' onChange={(e) => handlerSearchCharacter(e)}/>
            <button onClick={() => searchCharacter() }> Search</button>
        </div>
        <nav className='optionsContainer'>
              <Link to={"/characters"} onClick={() => handleChangeSection("characters")}>Characters</Link>
              <Link to={"/comics"} onClick={() => handleChangeSection("comics")}>Comics</Link>
              <Link to={"/series"} onClick={() => handleChangeSection("series")}>Series</Link>
        </nav>
    </div>
  )
}

export default HeaderComponent
