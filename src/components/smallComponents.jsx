
import { RiChromeLine } from "react-icons/ri";

export const MontRealCom = () => {
  return (
    <div className="flex items-center gap-[1em] w-fit">
        <RiChromeLine className="text-[2.5em] text-white" />
        <h3 className="text-[1.2em] uppercase font-Lausanne_500">Montreal_56:34:56</h3>
    </div>
  )
}


export const SocialMediAccount = () => {
  return(
      <div className='flex justify-center items-center gap-[0.5em]'>
          <h3 className='text-[2.2em] font-Lausanne_500 border-[0.05em] cursor-pointer border-white px-[0.5em] uppercase rounded-[0.7em]'>fb</h3>
          <h3 className='text-[2.2em] font-Lausanne_500 border-[0.05em] cursor-pointer border-white px-[0.5em] uppercase rounded-[0.7em]'>ig</h3>
          <h3 className='text-[2.2em] font-Lausanne_500 border-[0.05em] cursor-pointer border-white px-[0.5em] uppercase rounded-[0.7em]'>in</h3>
          <h3 className='text-[2.2em] font-Lausanne_500 border-[0.05em] cursor-pointer border-white px-[0.5em] uppercase rounded-[0.7em]'>x</h3>
      </div>

  )
}