import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMarvelCharacter } from '../../core/services/services'
import { setLoading } from '../MainComponent/MainComponentAction'
import './CardDetailsComponent.css' // Archivo CSS para los estilos específicos

const CardDetailsComponent = ({section}) => {
  const [info, setInfo] = useState(undefined)
  const dispatch = useDispatch()

  const idForDetails = useSelector((state) => state.mainComponentReducers.characterId)
  const loading = useSelector((state) => state.mainComponentReducers.loading)

  useEffect(() => {
    const fetchData = async () =>{
      dispatch(setLoading(true))
      try {
        const data = await fetchMarvelCharacter(section, idForDetails)
        setInfo(data[0])
      } catch (error) {
        console.error(error)
      } finally {
        dispatch(setLoading(false))
      }
    }
    fetchData()
  }, [section, idForDetails, dispatch])

  return (
    <div className='cardDetails'>
      {loading ? (
        <div className='spinner-container'>
          <span className="loader"></span>
        </div>
      ) : !info ? (
        <div className='no-data'>
          <span>No data found</span>
        </div>
      ) : (
        <div className="details-content">
          <div className="image-container">
            <img src={`${info.thumbnail.path}.${info.thumbnail.extension}`} alt={info.title || "No title available"} />
          </div>
          <div className="info-container">
            <span className='title'>{info.title}</span>

            <div className='characters'>
              <span className="section-header">Characters:</span>
              <div className='characters-list'>
                {info.characters?.items?.map((char, idx) => (
                  <div key={idx} className='character'>
                    <span>{char.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='creators'>
              <div className="writer">
                <span className="section-header">Writer:</span>
                {info.creators?.items?.filter(cre => cre.role === 'writer').map((writer, idx) => (
                  <span key={idx}>{writer.name}</span>
                ))}
              </div>
              <div className="artist">
                <span className="section-header">Artist:</span>
                {info.creators?.items?.filter(cre => cre.role === 'penciller').map((artist, idx) => (
                  <span key={idx}>{artist.name}</span>
                ))}
              </div>
            </div>

            <div className="price">
              <span className="section-header">Price:</span>
              {info.prices?.map((pr, idx) => (
                <span key={idx}>${pr.price}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CardDetailsComponent
