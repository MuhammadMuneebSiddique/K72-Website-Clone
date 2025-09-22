import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'


export const StairLoadingEffect = (props) => {

    const currentPath = useLocation().pathname
    const stairParentRef = useRef(null)
    const appRef = useRef(null)
    useGSAP(()=>{
        const tl = gsap.timeline()
        tl.to(stairParentRef.current,{
            display:"block"
        })
        tl.from(".loading-effect",{
            height:0,
            stagger:-0.1
        })
        tl.from(appRef.current,{
            opacity:0,
        })
        tl.to(".loading-effect",{
            y:"100%",
            stagger:-0.1
        })
        tl.to(stairParentRef.current,{
            display:"none"
        })
        tl.to(".loading-effect",{
            y:"0%",
        })
    },[currentPath])

  return (
    <div>
        <div ref={stairParentRef} className='h-screen w-full hidden z-30 fixed top-0'>
            <div className='h-full w-full flex justify-center '>
                <div className='loading-effect h-full w-1/5 bg-black'></div>
                <div className='loading-effect h-full w-1/5 bg-black'></div>
                <div className='loading-effect h-full w-1/5 bg-black'></div>
                <div className='loading-effect h-full w-1/5 bg-black'></div>
                <div className='loading-effect h-full w-1/5 bg-black'></div>
            </div>
        </div>
        <div ref={appRef} className='app relative'>
            {props.children}
        </div>
    </div>
  )
}
