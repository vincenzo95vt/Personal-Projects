import React, { useState } from 'react'

const SeriesDetailsComponent = ({info}) => {
    const [showMoreCreators, setShowMoreCreators] = useState(false)
    const [showMoreComics, setShowMoreComics] = useState(false)

    const limit = 7

    const creatorsToShow = showMoreCreators ? info.creators.items : info.creators.items.slice(0, limit)
    const comicsToShow = showMoreComics ? info.comics.items : info.comics.items.slice(0, limit)
    console.log(comicsToShow)
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
            <div className='creators-container'>
                <span className='section-header'>Creators:</span>
                <div className='creators-list'>
                    {
                    creatorsToShow.length === 0 ?
                        (<span>No data to show</span>)
                        :
                        (
                        creatorsToShow.map((creator, index) => (
                            <div key={index}>
                                <span className='creator-name'>{creator.name}</span>
                            </div>))
                        )
                    }
                    {
                        info.creators.items.length > limit && (
                            <span className='show-more-btn' onClick={() => setShowMoreCreators(!showMoreCreators)}>
                                {showMoreWriters ? 'Show less' : 'Show more'}
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
                            <span>No data to show</span>
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
        </div>
    </div>
  )
}

export default SeriesDetailsComponent
