import React from 'react';
import "./CardComponent.css";
import moment from 'moment';

const CardComponent = ({ char, section }) => {
  if (!char) {
    return <div className='card'><span>No data available</span></div>;
  }

  const renderCharacter = () => (
    <>
      <img src={`${char.thumbnail?.path}.${char.thumbnail?.extension}`} alt="" />
      <span className='charName'>{char.name || 'No name available'}</span>
      <span className='description'>{char.description || 'No description available'}</span>
      <div className='containerComicsInfo'>
        <p>Comics where appears:</p>
        <div className='divComics'>{
          char?.comics?.items?.length > 0 ? (
            char.comics.items.map((com, idx) => (
              <span key={idx} className='comicName'>{com.name || 'No name available'}</span>
            ))
          ) : (
            <div className='noDataContainer'><span>No comics available</span></div>
          )
        }
        </div>
      </div>
    </>
  );

  const renderComic = () => (
    <>
      <img src={`${char.thumbnail?.path}.${char.thumbnail?.extension}`} alt="" />
      <span className='charTitle'>{char.title || 'No title available'}</span>
      <span>{char.description || 'No description available'}</span>
      <div className='containerInfoDate'>
        <p>On Sale Date:</p>
        <span>
          {char.dates?.length > 0 && char.dates[0]?.date
            ? moment(char.dates[0].date).format('YYYY-MM-DD')
            : 'No date available'}
        </span>
      </div>
      <div className='containerInfoCreators'>
        <p>Creators:</p>
        <div className='containerCreators'>
          {char.creators?.items?.length > 0 ? (
            char.creators.items.map((cre, idx) => (
              <span key={idx}>{cre.name}</span>
            ))
          ) : (
            <div className='noDataContainer'><span>No creators available</span></div>
          )}
        </div>
      </div>
    </>
  );

  return (
    <div className='card'>
      {section === 'characters' ? renderCharacter() :
        section === 'comics' ? renderComic() :
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
