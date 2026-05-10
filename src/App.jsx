import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Hobby from './pages/Hobby'
import Header from './components/Header'
import HobbyDetails from './pages/HobbyDetails'



function App() {

  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/hobbies' element={<Hobby />} />
        <Route path="/hobby/:id" element={<HobbyDetails />} />

      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
