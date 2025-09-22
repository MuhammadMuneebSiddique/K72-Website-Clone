import React from 'react'
import { Video } from '../components/home/Video'
import { HomeTopText, HomeBottomText} from "../components/home/HomeSmallCom"

const Home = () => {
  return (
    <div className="relative text-[1vw]">
      <div className='h-screen w-full fixed'>
        <Video />
      </div>
      <div className='h-screen w-full flex items-center flex-col relative'>
        <HomeTopText />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home