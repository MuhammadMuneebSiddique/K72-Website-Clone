import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Agence from './pages/agence'
import Project from './pages/projects'
import Contact from './pages/contact'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import NavBar from './components/NavBar'

gsap.registerPlugin(ScrollTrigger)

const App = () => {

  return (
    <section className='text-4xl'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence /> } />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </section>
  )
}

export default App