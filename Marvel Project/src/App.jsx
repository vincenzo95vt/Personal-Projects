import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import MainComponent from './components/MainComponent/MainComponent'
import store from './core/redux/store/store'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <HeaderComponent/>
        <MainComponent/>
      </div>
    </Provider>
    
  )
}

export default App
