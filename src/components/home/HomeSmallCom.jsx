import { Video } from "./Video";
import { Link } from "react-router-dom";
import { MontRealCom } from "../smallComponents";

export const HomeTopText = () => {
  return (
    <div className="flex-center absolute top-[45%] -translate-y-[50%] left-[50%] -translate-x-[50%] flex-col">
      <div className="flex-center flex-col">
        <div className="text-[12vw] md:text-[10vw] lg:text-[9.6vw] leading-[10vw] md:leading-[9vw] lg:leading-[8.5vw] font-Lausanne_300 uppercase  whitespace-nowrap">
          The spark for
        </div>
        <div className="text-[12vw] md:text-[10vw] lg:text-[9.6vw] leading-[10vw] md:leading-[9vw] lg:leading-[8.5vw] font-Lausanne_300 uppercase flex-center">
          all
          <div className="w-[16vw] rounded-full h-[7vw] overflow-hidden">
            <Video />
          </div>
          things
        </div>
        <div className="text-[12vw] md:text-[10vw] lg:text-[9.6vw] leading-[10vw] md:leading-[9vw] lg:leading-[8.5vw] font-Lausanne_300 uppercase ">
          creative
        </div>
      </div>
      <div className="flex justify-end mt-[5vw] md:m-0 w-full px-[1vw]">
        <div className="w-full md:w-[30vw]  flex flex-col justify-end items-center">
            <h3 className="text-[2vw] md:text-[1.3vw] lg:text-[1.1vw] m-0 md:mr-[-3vw] text-end font-Lausanne_500 ">K72 is an agency that builds</h3>
            <p className="text-[2vw] md:text-[1.3vw] lg:text-[1.1vw] text-center md:text-start md:leading-[1.4vw] font-Lausanne_500 ">brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.</p>
        </div>
      </div>
    </div>
  );
};

export const HomeBottomText = () => {
  return <div className="w-full flex absolute bottom-[1em] items-end">
    <div className="hidden lg:block">
      <MontRealCom />
    </div>
    <div className="w-full absolute flex-center gap-[2vw]">
        <Link to="/project" className="text-[8vw] sm:text-[7vw] md:text-[6.5vw] hover:text-[#D3FD50] hover:border-[#D3FD50] font-Lausanne_500 leading-[5vw] px-[1.7vw] pt-[1vw] py-[0.3vw] border-2 border-[#fff] rounded-full uppercase " >work</Link>
        <Link to="/agence" className="text-[8vw] sm:text-[7vw] md:text-[6.5vw] hover:text-[#D3FD50] hover:border-[#D3FD50] font-Lausanne_500 leading-[5vw] px-[1.7vw] pt-[1vw] py-[0.3vw] border-2 border-[#fff] rounded-full uppercase " >Agency</Link>
    </div>
  </div>;
};
