import React from 'react'
import "./CardComponent.css"
const CardComponent = () => {
  return (
    <div className='card'>
      <img src="https://hips.hearstapps.com/hmg-prod/images/hulk-thor-ragnarok-infinity-war-1536683805.jpg?crop=0.564xw:1.00xh;0.204xw,0&resize=1200:*" alt="" />
      <span className='charName'>Hulk</span>
      <span>Bruce Banner es un científico que, tras una exposición a una explosión de rayos gamma, se transforma en Hulk cuando experimenta emociones extremas, como ira o estrés. 
        Hulk es un ser de inmensa fuerza física, tamaño y resistencia, cuyo poder aumenta con su nivel de enojo.
        </span>
    </div>
  )
}

export default CardComponent
