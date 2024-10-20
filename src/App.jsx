
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Skill from './Components/Skill/Skill'
import Hero from './Components/Hero/Hero'

function App() {


  return (
    <div>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/skill' element={<Skill/>}/>
        </Routes>
    </div>
  )
}

export default App
