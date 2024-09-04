import './App.css'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import MainComponent from './components/MainComponent/MainComponent'
import store from './core/redux/store/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='app'>
          <HeaderComponent/>
            <Routes>
              <Route path="/" element={<MainComponent section="characters" />}/>
              <Route path="/comics" element={<MainComponent section="comics" />} />
              <Route path="/series" element={<MainComponent section="series" />} />
              <Route path="/films" element={<MainComponent section="films" />} /> 
            </Routes>
        </div>
      </BrowserRouter>
    </Provider>
    
  )
}

export default App
