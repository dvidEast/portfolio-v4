import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import School from './pages/School'
import Projects from './pages/Projects'
import Art from './pages/Art'
import Nav from './components/Nav'
import ParticlesBackground from "./components/Particles"

import './styles/AppStyles/App.css'

function App() {

  return (
    <>
<<<<<<< HEAD
      <ParticlesBackground />
=======
      {/* <ParticlesBackground /> */}
>>>>>>> 81e6e24 (refactored home)
      <Nav />
      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='school' element={ <School /> }></Route>
        <Route path='projects' element={ <Projects /> }></Route>
        <Route path='art' element={ <Art /> }></Route>
      </Routes>
    </>
  )
}

export default App