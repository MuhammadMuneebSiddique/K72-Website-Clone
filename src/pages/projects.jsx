import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ProjectDetails } from '../../Constant'
import { useMediaQuery } from 'react-responsive'
import Footer from '../components/Footer'

const Project = () => {
const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 640px)'
  })
  console.log(isDesktopOrLaptop)
  useGSAP(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:".project-image-container",
        scrub:2,
        start:"0% 85%",
        end:"210% -150%"
      }
    })

    tl.from(".project-image-item",{
      height:"10em",
      ease:"linear",
      stagger:0.3
    })

  },[])

  return (
    <section className='text-[1vw] p-[0.5vw] w-full h-full relative text-black'>
      <div className='mt-[50vh] flex gap-[2em]'>
        <h2 className='text-[15em] uppercase font-Lausanne_500'>Projects</h2>
        <h2 className='text-[5em] mt-[0.3em] capitalize font-Lausanne_300'>16</h2>
      </div>
      <div className='project-image-container w-full h-full flex flex-col gap-[1em]'>
        {
          ProjectDetails.map((elem)=>{
            return (
              <div key={elem.id} className={`${isDesktopOrLaptop ? "project-image-item" : ""} flex flex-col sm:flex-row w-full h-[30em ${elem.id == "1" ? "-mt-[2.5em]" : ""} gap-[4em] sm:gap-[1em]`}>
                <div className='w-full sm:w-1/2 bg-white'>
                  <div className='w-full hover:rounded-[3em] relative overflow-hidden transition-all flex justify-center items-center  h-full bg-amber-500 '>
                    <img className='w-full object-cover h-full' src={elem.img1} alt="image" />
                    <div className='absolute w-full flex-center h-full opacity-0 hover:opacity-100 bg-black/10'>
                      <h2 className='text-[3em] cursor-pointer border-[0.05em] z-10 absolute rounded-[2em] p-[0.2em] pt-[0.35em] text-white uppercase font-Lausanne_500 '>Vior Le Project</h2>
                    </div>
                  </div>
                  <div className='block sm:hidden w-full py-[1em]'>
                    <div className='flex justify-between items-center'>
                      <h2 className='text-[6.5em] font-Lausanne_500 capitalize '>{elem.title1}</h2>
                      <h3 className='text-[5em] font-Lausanne_300 capitalize'>{elem.year1}</h3>
                    </div>
                    <h2 className='text-[4.5em] py-[0.5em] font-Lausanne_500 capitalize'>{elem.title1}</h2>
                  </div>
                </div>
                <div className='w-full sm:w-1/2 bg-white'>
                  <div className='w-full hover:rounded-[3em] relative overflow-hidden transition-all flex justify-center items-center  h-full bg-amber-500 '>
                    <img className='w-full object-cover h-full' src={elem.img2} alt="image" />
                    <div className='absolute w-full flex-center h-full opacity-0 hover:opacity-100 bg-black/10'>
                      <h2 className='text-[3em] cursor-pointer border-[0.05em] z-10 absolute rounded-[2em] p-[0.2em] pt-[0.35em] text-white uppercase font-Lausanne_500 '>Vior Le Project</h2>
                    </div>
                  </div>
                  <div className='block sm:hidden w-full py-[1em]'>
                    <div className='flex justify-between items-center'>
                      <h2 className='text-[6.5em] font-Lausanne_500 capitalize '>{elem.title2}</h2>
                      <h3 className='text-[5em] font-Lausanne_300 capitalize'>{elem.year2}</h3>
                    </div>
                    <h2 className='text-[4.5em] py-[0.5em] font-Lausanne_500 capitalize'>{elem.title2}</h2>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <Footer />
    </section>
  )
}

export default Project