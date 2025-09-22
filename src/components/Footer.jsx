import React from 'react'
import { MontRealCom, SocialMediAccount } from './smallComponents'
import { FaHeart } from "react-icons/fa6";
import { FooterTag } from '../../Constant';

const Footer = () => {
  return (
    <section className='text-[1.6vw] sm:text-[1.3em] md:text-[1.2vw] lg:text-[1vw] relative bg-black text-white h-[25vh] mobile:h-[30vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] flex flex-col justify-between w-full'>
        <div className='text-[2em] flex justify-between flex-col gap-[1em] sm:flex-row sm:gap-0 items-center p-[0.5em] w-full'>
            <SocialMediAccount />
            <div className='px-[0.4em] flex items-center hover:text-[#D3FD50] pt-[0.3em] border-[0.1em] gap-[1em] rounded-full py-[0.1em]'>
                <h3 className='text-[2em] font-Lausanne_500 hover:text-[#D3FD50] uppercase text-white '>contact</h3>
                <FaHeart className='text-[2em] hover:text-[#D3FD50] text-white' />
            </div>
        </div>
        <div className='flex justify-center lg:justify-between flex-col lg:flex-row p-[0.5em] items-center gap-[1em]'>
            <MontRealCom />
            <div className='text-[1em] font-Lausanne_500 uppercase flex justify-center gap-[2em] items-center'>
                {FooterTag.map((elem)=>{
                    return <h2 key={elem.id} className='hover:text-[#D3FD50] cursor-pointer'>{elem.name}</h2>
                })}
            </div>
            <div className='text-[1em] cursor-pointer font-Lausanne_500 uppercase hover:text-[#D3FD50]'>
                <h2>retour en haut</h2>
            </div>
        </div>
    </section>
  )
}

export default Footer