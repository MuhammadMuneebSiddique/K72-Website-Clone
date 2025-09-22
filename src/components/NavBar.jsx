import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'
import { TfiClose } from "react-icons/tfi";
import { NavItems } from '../../Constant';
import { MontRealCom, SocialMediAccount } from './smallComponents';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {

    const currentPathname = useLocation().pathname
    const [menu, setMenu] = useState(false)
    const timelineRef = useRef(null)
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:"#nav-bar",
                scrub:1,
                start:"110% 0%",
                end:"120% 0%"
            }
        })
        tl.to("#menu",{
            height:50
        },"S")
        tl.to("#agency",{
            height:0
        },"S")
        tl.to("#work",{
            height:0
        },"S")
        tl.to("#menu h2",{
            opacity:0,
            duration:0.5
        },"S")
        tl.to("#work h2",{
            opacity:0,
            duration:0.5
        },"S")
        tl.to("#agency h2",{
            opacity:0,
            duration:0.5
        },"S")

        // Nav Item Hover Animation
        gsap.to(".nav-item-hover",{
            x:"-100%",
            duration:10,
            repeat:-1,
            ease:"linear",
        })
        
        // Menu open Animation
        const menuEffectTL = gsap.timeline()
        menuEffectTL.from(".menu-effect",{
            height:0,
            duration:0.5,
            stagger:-0.1
        })
        menuEffectTL.from(".nav-content",{
            opacity:0,
        },"IS")
        menuEffectTL.from(".nav-item",{
            y:"-30%",
            opacity:0,
            stagger:0.1
        },"IS")
        menuEffectTL.pause()
        timelineRef.current = menuEffectTL

    },[])

    const handleMenuOpen = () => {
        setMenu(!menu)
        timelineRef.current.play()
    }

    const handleMenuClose = () => {
        timelineRef.current.reverse()
        setTimeout(() => {
            setMenu(false)
        }, 1900);
    }

  return (
    <section id='nav-bar' className='text-[2.3vw] mobile:text-[1.6vw] sm:text-[1.4vw] md:text-[1.2vw] lg:text-[1vw] z-50 w-full fixed top-0 right-0'>
        <div className='flex justify-between items-start w-full'>
            <div className='p-[1em]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="8em" viewBox="0 0 103 44">
                    <path fillRule="evenodd" fill='black' d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                </svg>
            </div>
            <div className='w-full flex justify-end'>
                <Link to="/project"><div id='work' className={`nav-hover relative overflow-hidden hover:text-black text-[#fff] ${currentPathname == "/" ? "hidden" : " lg:flex w-[20em] h-[4em] hidden items-end bg-black"}`}>
                    <h2 className='text-[1.3em] uppercase z-10 pl-[0.5em] pb-[0.2em] font-Lausanne_500'>Work (12)</h2>
                </div></Link>
                <Link to="/agence"><div id='agency' className={`nav-hover relative overflow-hidden hover:text-black text-[#fff] ${currentPathname == "/" ? "hidden" : " lg:flex w-[30em] h-[6em] hidden items-end bg-black"}`}>
                    <h2 className='text-[1.3em] z-10 uppercase pl-[0.5em] pb-[0.2em] font-Lausanne_500'>Agency</h2>
                </div></Link>
                <div id='menu' onClick={handleMenuOpen} className={`nav-hover relative overflow-hidden hover:text-black text-[#fff] ${currentPathname == "/" ? " w-[15em] h-[4em] relative flex items-end bg-black" : " w-[15em] h-[4em] lg:h-[8em] relative flex items-end bg-black"}`}>
                    <div className='nav-line w-[4em] h-[0.1em] absolute top-[1.5em] z-10 right-[2em] bg-white'></div>
                    <div className='nav-line w-[2em] h-[0.1em] absolute top-[2em] z-10 right-[2em] bg-white'></div>
                    <h2 className={` z-10 ${currentPathname == "/" ? "hidden" : "hidden lg:block text-[1.3em] uppercase pl-[0.5em] pb-[0.2em] font-Lausanne_500"}`}>menu</h2>
                </div>
            </div>
        </div>
        {/* Nav container */}
        <div className={`w-full  ${menu ? "block" : "hidden"} h-screen absolute z-50 top-0 left-0`}>
            {/* nav effect starting and closing effect */}
            <div className='h-full w-full absolute top-0  flex justify-center'>
                <div className='menu-effect h-full w-1/5 bg-black'></div>
                <div className='menu-effect h-full w-1/5 bg-black'></div>
                <div className='menu-effect h-full w-1/5 bg-black'></div>
                <div className='menu-effect h-full w-1/5 bg-black'></div>
                <div className='menu-effect h-full w-1/5 bg-black'></div>
            </div>
            {/* nav content */}
            <div className='nav-content relative h-screen z-50'>
                <div className='w-full flex justify-between'>
                    <div className='p-[1em]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8em" viewBox="0 0 103 44">
                            <path fillRule="evenodd" fill='white' d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                        </svg>
                    </div>
                    <TfiClose onClick={handleMenuClose} className='text-[8em] cursor-pointer hover:text-[#D3FD50]' /> 
                </div>
                <ul className='w-full absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]'>
                    {
                        NavItems.map((elem)=>{
                            return <div key={elem.id} className='relative nav-item'>
                                    <Link to={elem.link} onClick={handleMenuClose}>
                                        <div className='nav-item-hover-container cursor-pointer bg-[#D3FD50] hidden absolute top-0 overflow-hidden gap-[2em]'>
                                            <div className='nav-item-hover flex gap-[2em] items-center justify-start '>
                                                <h2 className='text-[7.5em] leading-[0.75em] pt-[0.2em] whitespace-nowrap text-black uppercase font-Lausanne_500'>{elem.hoverHead}</h2>
                                                <img className='min-w-[15em] h-[5em] object-cover rounded-[4em]' src={elem.img1} alt="image" />
                                                <h2 className='text-[7.5em] leading-[0.75em] pt-[0.2em] whitespace-nowrap text-black uppercase font-Lausanne_500'>{elem.hoverHead}</h2>
                                                <img className='min-w-[15em] h-[5em] object-cover rounded-[4em]' src={elem.img2} alt="image" />
                                            </div>
                                            <div className='nav-item-hover flex gap-[2em] items-center justify-start '>
                                                <h2 className='text-[7.5em] leading-[0.75em] pt-[0.2em] whitespace-nowrap text-black uppercase font-Lausanne_500'>{elem.hoverHead}</h2>
                                                <img className='min-w-[15em] h-[5em] object-cover rounded-[4em]' src={elem.img1} alt="image" />
                                                <h2 className='text-[7.5em] leading-[0.75em] pt-[0.2em] whitespace-nowrap text-black uppercase font-Lausanne_500'>{elem.hoverHead}</h2>
                                                <img className='min-w-[15em] h-[5em] object-cover rounded-[4em]' src={elem.img2} alt="image" />
                                            </div>
                                        </div>
                                    </Link>
                                    <li key={elem.id} className='w-full hover:text-[#D3FD50] cursor-pointer text-center text-[7.5em] leading-[0.75em] pt-[0.2em] border-y-[0.01em] border-[#ffffff80] font-Lausanne_500 uppercase' >{elem.name}</li>
                                </div>
                        })
                    }
                </ul>
                <div className='flex absolute w-full bottom-[0.5em] justify-between items-center px-[1em]'>
                    <div className='hidden lg:block'>
                        <MontRealCom />
                    </div>
                    <div className='flex lg:justify-center flex-col gap-[0.5em] lg:flex-row lg:items-center lg:gap-[1em]'>
                        <h3 className='text-[0.8em] font-Lausanne_500 cursor-pointer uppercase'>privacy policy</h3>
                        <h3 className='text-[0.8em] font-Lausanne_500 cursor-pointer uppercase'>privacy notice</h3>
                        <h3 className='text-[0.8em] font-Lausanne_500 cursor-pointer uppercase'>ethics report</h3>
                        <h3 className='text-[0.8em] font-Lausanne_500 cursor-pointer uppercase'>consent choices</h3>
                    </div>
                    <SocialMediAccount />
                </div>
            </div>
        </div>
    </section>
  )
}

export default NavBar