import React from 'react';
import "./CardComponent.css";
import { fetchMarvelCharacter } from '../../core/services/services';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showDetails } from '../MainComponent/MainComponentAction';

const CardComponent = ({ char, section }) => {
  if (!char) {
    return <div className='card'><span>No data available</span></div>;
  }

  const dispatch = useDispatch()
  const imgNotAvailable = char.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
  const navigate = useNavigate()
  if(imgNotAvailable){
    return null
  }

  const renderCharacter = () => (
    <>
      <img src={`${char.thumbnail?.path}.${char.thumbnail?.extension}`} alt="" />
      <div className="cardOverlay"></div> {/* Overlay con degradado oscuro */}
      <span className='charName'>{char.name || 'No name available'}</span>
    </>
  );

  const renderComic = () => (
    <>
      <img src={`${char.thumbnail?.path}.${char.thumbnail?.extension}`} alt="" />
      <div className="cardOverlay"></div> 
      <span className='charTitle'>{char.title || 'No title available'}</span>
    </>
  );

  const renderSeries = () => (
    <>
      <img src={`${char.thumbnail?.path}.${char.thumbnail?.extension}`} alt="" />
      <div className="cardOverlay"></div> 
      <span className='charTitle'>{char.title || 'No title available'}</span>
    </>
  )

  const goToDetailsComponent = (section, item) => {
    dispatch(showDetails(item))
    console.log("section",section)
    console.log("id", item)

    navigate(`/${section}/${item}`)
  }


  return (
    <div className='card' id={char.id} onClick={() => goToDetailsComponent(section, char.id)}>
      {section === 'characters' ? renderCharacter() :
        section === 'comics' ? renderComic() :
        section === "series" ? renderSeries() :
        <>
          <img src={`${char.thumbnail?.path}.${char.thumbnail?.extension}`} alt="" />
          <span className='charName'>{char.name || 'No name available'}</span>
          <span>{char.description || 'No description available'}</span>
        </>
      }
    </div>
  );
}

export default CardComponent;
