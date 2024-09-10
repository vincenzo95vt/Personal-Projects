import React, { useEffect, useState } from 'react';
import "./HeaderComponent.css";
import { fetchMarvelCharByName } from '../../core/services/services';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, showMarvelCharacter } from '../MainComponent/MainComponentAction';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { showSection } from '../SelectionMenuComponent/SectionAction';

const HeaderComponent = () => {
  const [character, setCharacter] = useState(undefined);
  const [menuOpen, setMenuOpen] = useState(false); // Nuevo estado para manejar el menú

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sectionFromReducer = useSelector((state) => state.sectionReducer.section)

  const handlerSearchCharacter = (e) => {
    setCharacter(e.target.value);
  };

  const searchCharacter = async () => {
    dispatch(setLoading(true));
    try {
      const response = await fetchMarvelCharByName(character);
      if (response.ok) {
        dispatch(showMarvelCharacter(response.data.results));
        navigate("/characters");
      } else {
        throw new Error('Error fetching character data');
      }
    } catch (error) {
      console.error('Failed to fetch character:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const mainPage = () => {
    dispatch(showMarvelCharacter(undefined));
    navigate("/");
  };

  const handleChangeSection = (section) => {
    dispatch(showMarvelCharacter(undefined));
    dispatch(showSection(section));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Cambia el estado del menú
  };

  return (
    <div className={`header ${sectionFromReducer === "selectionMenu" ? 'center' : 'space-between'}`}>
      {
        sectionFromReducer === "selectionMenu" ? 
        (
          <div className='bg' onClick={() => mainPage()}>
            <img src="marvel.svg" alt="Marvel logo" />
          </div>
        )
        :
        (
          <>
            <div className='bg' onClick={() => mainPage()}>
              <img src="marvel.svg" alt="Marvel logo" />
            </div>
            <div>
              <input type="text" placeholder='Search Here' className='search' onChange={(e) => handlerSearchCharacter(e)} />
              <button onClick={() => searchCharacter()}> Search</button>
            </div>

            <button className='menu-toggle' onClick={toggleMenu}>☰</button>

            <nav className={`optionsContainer ${menuOpen ? 'show' : ''}`}>
              <Link to={"/characters"} onClick={() => handleChangeSection("characters")}>Characters</Link>
              <Link to={"/comics"} onClick={() => handleChangeSection("comics")}>Comics</Link>
              <Link to={"/series"} onClick={() => handleChangeSection("series")}>Series</Link>
            </nav>
          </>
          
        )
      }
      
    </div>
  );
};

export default HeaderComponent;
