import React, { useState } from 'react';
import "./CharacterDetailsComponent.css";

const CharacterDetailsComponent = ({ info }) => {

  return (
    <div className='details-content'>
      <div className="image-container">
        <img
          src={`${info.thumbnail.path}.${info.thumbnail.extension}`}
          alt={info.title || "No title available"}
        />
      </div>
      <div className="info-container">
        <span className='name'>{info.name}</span>
        <div className='description-container'>
          <span className='section-header'>Description:</span>
          <span className='description'>{info.description || "No description available"}</span>
        </div>
        <ListWithToggle items={info.comics.items} label="Comics" limit={5} itemClassName="comic" />
        <ListWithToggle items={info.series.items} label="Series" limit={5} itemClassName="serie" />
        <ListWithToggle items={info.events.items} label="Events" limit={5} itemClassName="event" />
        <ListWithToggle items={info.stories.items} label="Stories" limit={5} itemClassName="story" />
      </div>
    </div>
  );
};

const ListWithToggle = ({ items, label, limit = 7, itemClassName }) => {
    const [showMore, setShowMore] = useState(false);
    const itemsToShow = showMore ? items : items.slice(0, limit);

    return (
      <div>
        <span className='section-header'>{label}: </span>
        <div className='info-and-showmore'>
            <div className={`${itemClassName}-container`}>
            {itemsToShow.length !== 0 ? (
                itemsToShow.map((item, idx) => (
                <span className={itemClassName} key={idx}>{item.name}</span>
                ))
            ) : (
                <span className='notFound'>No {label.toLowerCase()} found</span>
            )}
            {
                items.length > limit && (
                    <span className='show-more-btn' onClick={() => setShowMore(!showMore)}>
                    {showMore ? 'Show less' : 'Show more'}
                    </span>
                )
            }
            </div>
        </div>
        
      </div>
    );
  };

export default CharacterDetailsComponent;
