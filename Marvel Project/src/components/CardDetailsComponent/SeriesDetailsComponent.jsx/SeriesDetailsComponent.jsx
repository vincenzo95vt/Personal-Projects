import React, { useState } from 'react'
import "./SeriesDetailsComponent.css"


const SeriesDetailsComponent = ({info}) => {
    const [showMoreCreators, setShowMoreCreators] = useState(false)
    const [showMoreComics, setShowMoreComics] = useState(false)
    const [showMoreEvents, setShowMoreEvents] = useState(false)
    const [showMoreStories, setShowMoresTories] = useState(false)

    const limit = 7

    const creatorsToShow = showMoreCreators ? info.creators.items : info.creators.items.slice(0, limit)
    const comicsToShow = showMoreComics ? info.comics.items : info.comics.items.slice(0, limit)
    const eventsToShow = showMoreEvents ? info.events.items : info.events.items.slice(0, limit)
    const storiesToShow = showMoreStories ? info.stories.items : info.stories.items.slice(0, limit)
    console.log(info)
  return (
    <div className='details-content'>
        <div className='image-container'>
            <img src={`${info.thumbnail.path}.${info.thumbnail.extension}`} alt="" />
        </div>
        <div className="info-container">
            <span className='title'>{info.title}</span>
            <div className='description-container'>
                <span className='section-header'>Description:</span>
                <span className='description'>{info.description || "No description available"}</span>
            </div>
            <div className='creators-info-container'>
                <span className='section-header'>Creators:</span>
                <div className='creator-list'>
                    {
                    creatorsToShow.length === 0 ?
                        (<span>No data to show</span>)
                        :
                        (
                        creatorsToShow.map((creator, index) => (
                            <div key={index}>
                                <span className='creators'>{creator.name}</span>
                            </div>))
                        )
                    }
                    {
                        info.creators.items.length > limit && (
                            <span className='show-more-btn' onClick={() => setShowMoreCreators(!showMoreCreators)}>
                                {showMoreCreators ? 'Show less' : 'Show more'}
                            </span>
                        )
                    }
                </div>
            </div>
            <div>
                <span className='section-header'>Comics:</span>
                <div className='comic-container'>
                    {
                        comicsToShow.length === 0 ? 
                        (
                            <span className='no-data'>No data to show</span>
                        )
                        :
                        (
                            comicsToShow.map((com, idx) => (
                                <div key={idx}>
                                    <span className='comic'>{com.name}</span>
                                </div>
                                )
                            )
                        )
                    }
                    {
                        info.comics.items.length > limit && (
                            <span className='show-more-btn' onClick={() => setShowMoreComics(!showMoreComics)}>
                                {showMoreComics ? 'Show less' : 'Show more'}
                            </span>)
                    }
                </div>
            </div>
            <div>
                <span className='section-header'>Events: </span>
                <div className='event-container'>
                    {
                        eventsToShow.length === 0 ? 
                        (
                            <span className='no-data'>No data to show</span>
                        )
                        :
                        (
                            eventsToShow.map((event, idx) => (
                                <div key={idx}>
                                    <span className='event'>{event.name}</span>
                                </div>))
                        )
                    }
                    {
                        info.events.items.length > limit && (
                            <span className='show-more-btn' onClick={() => setShowMoreEvents(!showMoreEvents)}>
                                {showMoreComics ? 'Show less' : 'Show more'}
                            </span>)
                    }
                </div>
            </div>
            <div>
                <span className="section-header">Stories:</span>
                <div className="story-container">
                    {
                        storiesToShow.length === 0 ? 
                        (
                            <span>No data to show</span>
                        )
                        :
                        (
                            storiesToShow.map((story, idx) => (
                                <div key={idx}>
                                    {
                                        story.type === "cover" ? 
                                        (null)
                                        :
                                        (
                                            <span className="story">{story.name}</span>
                                        )
                                    }
                                </div>
                            ))
                        )
                    }
                    {
                        info.stories.items.length > limit && (
                            <span className='show-more-btn' onClick={() => setShowMoresTories(!showMoreStories)}>
                                {showMoreStories ? 'Show less' : 'Show more'}
                            </span>)
                    }
                </div>
            </div>        
        </div>
    </div>
  )
}

export default SeriesDetailsComponent
