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
  console.log(info)
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
                {
                info.characters.items.length === 0 ? 
                (
                  <div className='character'>
                    <span>No data found</span>
                  </div>
                )
                :
                (
                  info.characters?.items?.map((char, idx) => (
                    <div key={idx} className='character'>
                      <span>{char.name}</span>
                    </div>
                  ))
                )
               }
              </div>
            </div>

            <div className='creators'>
              <div className="writer">
                <span className="section-header">Writer:</span>
                <div className='writerElem'>
                  {
                  info.creators.items.length === 0 ? 
                  (
                    <span>No data found</span>
                  )
                  : 
                  (info.creators?.items?.filter(cre => cre.role === 'writer' || cre.role === "editor").map((writer, idx) => (
                    <span key={idx}>{writer.name}</span>
                  )))}
                </div>
              </div>
              <div className="artist">
                <span className="section-header">Artist:</span>
                {
                  info.creators.items.length === 0 ? 
                  (
                    <span>No data found</span>
                  )
                  : 
                  (info.creators?.items?.filter(cre => cre.role === 'penciller').map((artist, idx) => (
                    <span key={idx}>{artist.name}</span>
                  )))}
              </div>
            </div>
              {
                !info.dates || info.dates.length === 0 ? 
                (
                  null
                )
                :
                (
                  <div className='dateContainer'>
                    <span className="section-header">Different dates of purchase:</span>
                    <div className='date-info'>
                      {info.dates.map((date, idx) => (
                        (date.type !== "focDate") &&
                        <div key={idx} className='date'>
                          <div className="tooltip-container">
                            <span className="purchase-item">{
                              date.type === "onsaleDate" ? "On Sale Date" :
                              date.type === "unlimitedDate" ? "Unlimited Date" :
                              date.type === "digitalPurchaseDate" ? "Digital Purchase Date" :
                              null
                            }: 
                            </span>
                            <svg className='svgInfo' xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="512" height="512"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,20a1,1,0,1,1,1-1A1,1,0,0,1,12,20Zm1.93-7.494A1.982,1.982,0,0,0,13,14.257V15a1,1,0,0,1-2,0v-.743a3.954,3.954,0,0,1,1.964-3.5,2,2,0,0,0,1-2.125,2.024,2.024,0,0,0-1.6-1.595A2,2,0,0,0,10,9,1,1,0,0,1,8,9a4,4,0,1,1,5.93,3.505Z"/></svg>
                            <div className="tooltip-content">
                              {date.type === "onsaleDate" && "This name refers to the date when the comic goes on sale."}
                              {date.type === "unlimitedDate" && "This refers to the date when the unlimited edition is available on platforms."}
                              {date.type === "digitalPurchaseDate" && "This is the date the comic became available digitally."}
                            </div>
                          </div>
                          <span className="date-value">
                            {new Date(date.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }
            <div className="price">
              <span className="section-header">Prices:</span>
              <div>
                {info.prices?.map((pr, idx) => (
                  <div className='container-price' key={idx} >
                    <span className='priceType'>{pr.type === "printPrice" ? "Normal price" : pr.type === "digitalPurchasePrice" ? "Digital Price" : null}:</span>
                    <span className='thePrice'>{pr.price === 0 ? "No price found" : `${pr.price}€`}</span>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CardDetailsComponent
