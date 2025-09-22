import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Agence from './pages/agence'
import Project from './pages/projects'
import Contact from './pages/contact'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import NavBar from './components/NavBar'
import Lenis from 'lenis'
import { useEffect } from 'react'
import "lenis/dist/lenis.css";  

gsap.registerPlugin(ScrollTrigger)

const App = () => {

    useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      smooth: true,
      smoothTouch: false,
      direction: "vertical",
      gestureDirection: "vertical",
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

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