import './App.css'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import MainComponent from './components/MainComponent/MainComponent'
import store from './core/redux/store/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SelectionMenuComponent from './components/SelectionMenuComponent/SelectionMenuComponent'
import CardDetailsComponent from './components/CardDetailsComponent/CardDetailsComponent'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='app'>
          <HeaderComponent/>
            <Routes>
              <Route path="/" element={<SelectionMenuComponent section="selectionMenu"/>} />
              <Route path="/characters" element={<MainComponent section="characters" />}/>
              <Route path="/characters/:id" element={<CardDetailsComponent section="characters" />}/>
              <Route path="/comics" element={<MainComponent section="comics" />} />
              <Route path="/comics/:id" element={<CardDetailsComponent section="comics" />} />
              <Route path="/series" element={<MainComponent section="series" />} />
              <Route path="/series/:id" element={<CardDetailsComponent section="series" />} />
            </Routes>
        </div>
      </BrowserRouter>
    </Provider>
    
  )
}

export default App
