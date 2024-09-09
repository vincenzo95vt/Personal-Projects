import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMarvelCharacter } from '../../core/services/services'
import { setLoading } from '../MainComponent/MainComponentAction'
import './CardDetailsComponent.css' // Archivo CSS para los estilos específicos
import ComicDetailsComponent from './ComicDetailsComponent/ComicDetailsComponent'
import CharacterDetailsComponent from './CharacterDetailsComponent/CharacterDetailsComponent'
import SeriesDetailsComponent from './SeriesDetailsComponent.jsx/SeriesDetailsComponent'
import SelectionMenuComponent from '../SelectionMenuComponent/SelectionMenuComponent'

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
        section === "comics" ? 
        (
          <ComicDetailsComponent  info={info} />
        )
        :
        (
          section === "characters" ? 
          (
            <CharacterDetailsComponent info={info}/>
          ) 
          :
          (
            section === "series" ? 
            (
              <SeriesDetailsComponent info={info}/>
            ) 
            :
            (<SelectionMenuComponent/>)
          )
        )
      )}
    </div>
  )
}

export default CardDetailsComponent
