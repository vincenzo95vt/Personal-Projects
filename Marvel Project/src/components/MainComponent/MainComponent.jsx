import React, { useEffect, useState } from 'react'
import "./MainComponent.css"
import CardComponent from '../CardComponent/CardComponent'
import { fetchMarvelData } from '../../core/services/services'
const MainComponent = () => {
  const [car, setChar] = useState(undefined)


  useEffect(() => {
    const fetchData = async () => {
        const data = await fetchMarvelData()
        console.log(data.data.results)
    }
    fetchData()
  },[])
  
  return (
    <div className='mainComponent'>
      <CardComponent/>
    </div>
  )
}

export default MainComponent
