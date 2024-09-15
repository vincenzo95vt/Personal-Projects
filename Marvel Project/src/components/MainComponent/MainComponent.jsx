import React, { useEffect, useState } from 'react'
import "./MainComponent.css"
import CardComponent from '../CardComponent/CardComponent'
import {useSelector, useDispatch} from "react-redux"
import { fetchMarvelData } from '../../core/services/services'
import { setLoading, showData } from './MainComponentAction'
import { useLocation } from 'react-router-dom'


const MainComponent = ({section}) => {
  const [data, setData] = useState(undefined)
  const [charInfo, setCharInfo] = useState(undefined)

  const dispatch = useDispatch()

  const marvelCharacterFromReducer = useSelector((state) => state.mainComponentReducers.character)
  const loading = useSelector((state) => state.mainComponentReducers.loading)

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true))
      try {
        const data = await fetchMarvelData(section)
        console.log(data.data.results)
        setData(data.data.results)
        dispatch(showData(data.data.results))
        
      } catch (error) {
        console.error(error.message)
      }finally{
        dispatch(setLoading(false))
      }
    }
    fetchData()
  },[section])
  
  useEffect(() => {
    console.log("MAIN PAGE",marvelCharacterFromReducer)
    setCharInfo(marvelCharacterFromReducer)
  }, [marvelCharacterFromReducer])
  
  return (
    <div className='mainComponent'>
      {
        loading ? (
          <div className='spinner-container'>
              <span className="loader"></span>
            </div>
        ) : 
        !charInfo ? 
        (
          data ? (
            data.map((char, idx) => (
              <CardComponent key={idx} char={char} section={section}/>
            ))
          ) : 
          (
            <div>
              <span > No data found</span>
            </div>
          )
        ) : 
        (
          charInfo.length === 0 ? 
          (
            <div className='no-data-container'>
              <span>Sorry, we didn´t find any results with the name requested,
                <br /> try again with another</span>
              <img src="/pngegg.png" alt="" />
            </div>
          ) 
          : 
          (
            charInfo.map((char, idx) => (
              <CardComponent key={idx} char={char} section={"characters"} />
            ))
          )
        )
      }
      
    </div>
  )
}

export default MainComponent
