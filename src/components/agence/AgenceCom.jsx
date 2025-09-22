import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { AgenceImagesDetail, AgencePinImages, MemberDetails } from '../../../Constant'

export const CenterText = () => {

    useGSAP(()=>{
        gsap.from(".agence-text",{
            y:"-50%",
            opacity:0,
            ease:"linear",
            delay:2.7,
            stagger:0.3,
        })
    },[])

  return (
    <div className='agence-text-container text-[1.1vw] lg:text-[1vw] text-black flex-center flex-col lg:gap-0 gap-[6vh] relative z-10 py-1 px-[3vw]'>
        <div className='w-full flex-center flex-col mt-[30em]'>
            <h2 className='agence-text text-[20em] overflow-hidden leading-[0.9em] font-Lausanne_500'>SEVEN7Y</h2>
            <h2 className='agence-text text-[20em] overflow-hidden leading-[0.9em] font-Lausanne_500'>TWO</h2>
        </div>
        <div className='w-full flex justify-end'>
            <p className='text-[5.5em] sm:text-[3.7em] leading-[1em] w-full lg:w-[60vw] font-Lausanne_500'>We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
        </div>
    </div>
  )
}


export const PinImage = () => {

    const imageRef = useRef(null)

    useGSAP(()=>{

        gsap.from(imageRef.current.querySelector("img"),{
            width:"0%",
            opacity:0,
            delay:2.7,
            duration:1
        })

        gsap.to(imageRef.current,{
            scrollTrigger:{
                trigger: imageRef.current,
                start:"0% 10%",
                end:"300% 10%",
                scrub:2,
                pin:true,
                onUpdate:(e)=>{
                    const imageIndex = Math.round(e.progress * AgencePinImages.length-1)
                    if (imageIndex >= 0){
                        imageRef.current.querySelector("img").src = AgencePinImages[imageIndex]
                    }else{
                        imageRef.current.querySelector("img").src = "images/joel_480X640_3-480x640.jpg"
                    }
                }
            }
        })

    },[])

  return (
    <div className='text-[1.5vw] sm:text-[1.2vw] lg:text-[1vw]'>
        <div ref={imageRef} className='w-[15em] overflow-hidden absolute top-[15vw] left-[30vw] h-[21em] rounded-2xl bg-transparent'>
            <img className='w-full h-full object-cover' src="images/joel_480X640_3-480x640.jpg" alt="image" />
        </div>
    </div>
  )
}

export const AboutDetail = () => {
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:".about-detail",
                start:"30% 10%",
                end:"70% 0%",
                scrub:2,
            }
        })

        tl.to(".agence-text-container",{
            backgroundColor:"#000",
            color:"#fff"
        },"S")

        tl.to(".about-detail",{
            backgroundColor:"#000",
            color:"#fff"
        },"S")

        tl.to(".special-member-container",{
            backgroundColor:"#000",
            color:"#fff"
        },"S")

    },[])
    return (
      <div className='about-detail text-[2.3vw] sm:text-[1.4vw] md:text-[1.2vw] lg:text-[1vw] grid grid-cols-2 md:grid-cols-3 gap-[2em] text-black bg-white  py-[15vh] px-[3vw] md:px-[8vw]'>
        <div className='h-[15em]'>
          <h2 className='text-[1.8em] capitalize font-Lausanne_500'>experties</h2>
        </div>
        <div className='h-[6em] text-[1.8em] leading-[0.9em] capitalize font-Lausanne_500 flex flex-col gap-[0.2em]'>
          <h2>strategy</h2>
          <h2>advertising</h2>
          <h2>branding</h2>
          <h2>desigin</h2>
          <h2>content</h2>
        </div>
        <div className='hidden md:block h-[6em]'></div>
        {/* second row */}
        <div className='col-span-2 md:col-span-1'>
            <p className='text-[1.8em] md:text-[1.2em]  font-Lausanne_500'>Our Work_ Born in curiosity, raised by dedication and fed with a steady diet of creativity.</p>
        </div>
        <div className='col-span-2 md:col-span-1'>
            <p className='text-[1.8em] md:text-[1.2em] font-Lausanne_500'>Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.</p>
        </div>
        <div className='col-span-2 md:col-span-1'>
            <p className='text-[1.8em] md:text-[1.2em] font-Lausanne_500'> Our Culture_ We’re open to each other. Period. The team works together to create a space that makes us proud.</p>
        </div>
      </div>
    )
}

export const SpecialMember = () => {
    useGSAP(()=>{
        // background text animation one
        gsap.to(".first-text-effect",{
            x:"-100%",
            duration:7,
            repeat:-1,
            ease:"linear"
        })

        // background text animation second
        gsap.to(".second-text-effect",{
            x:"0%",
            duration:7,
            repeat:-1,
            ease:"linear"
        })

        const specialMemberTL = gsap.timeline({
            scrollTrigger:{
                trigger:".special-member-img1",
                start:"0% 0%",
                end:"200% 0%",
                scrub:2,
                pin:true
            }
        })
        
        specialMemberTL.to(".first-background-text",{
            opacity:0
        })


        const specialMemberTL2 = gsap.timeline({
            scrollTrigger:{
                trigger:".special-member-img2",
                start:"0% 0%",
                end:"100% 0%",
                scrub:2,
                pin:true,
            }
        })

        // specialMemberTL2.from(".second-background-text",{
        //     opacity:0
        // })

    },[])
    return(
        <div className='special-member-container w-full text-[1vw] relative bg-white text-black flex flex-col'>
            <div className='special-member-item1 flex w-full relative justify-center z-10 items-center'>
                <div className='first-background-text w-full flex gap-[10em] h-screen relative z-20 flex-col justify-center items-center'>
                    <div className='relative w-full flex z-0'>
                        <h2 className='first-text-effect text-[10em] min-w-[140vw] whitespace-nowrap text-[#D3FD50] font-Lausanne_500 uppercase'>Lawrence</h2>
                        <h2 className='first-text-effect text-[10em] min-w-[140vw] whitespace-nowrap text-[#D3FD50] font-Lausanne_500 uppercase'>Lawrence</h2>
                    </div>
                    <div className='relative w-full flex z-50'>
                        <div className='second-text-effect flex translate-x-[-100%] min-w-[180vw] items-end gap-[1em]'>
                            <h2 className='text-[10em] whitespace-nowrap text-[#D3FD50] font-Lausanne_500 uppercase'>meunier</h2>
                            <h2 className='text-[3em] my-[0.6em] whitespace-nowrap font-Lausanne_500 uppercase'>account coordination</h2>
                        </div>
                        <div className='second-text-effect flex translate-x-[-100%] min-w-[180vw] items-end gap-[1em]'>
                            <h2 className='text-[10em] whitespace-nowrap text-[#D3FD50] font-Lausanne_500 uppercase'>meunier</h2>
                            <h2 className='text-[3em] my-[0.6em] whitespace-nowrap font-Lausanne_500 uppercase'>account coordination</h2>
                        </div>
                    </div>
                </div>
                <div className='special-member-img1 absolute flex justify-center items-center h-screen w-full'>
                    <img className='rounded-[1.5em] h-[45vh] mobile:h-[55vh] sm:h-[70vh] md:h-screen min-w-[20em] mobile:min-w-[25em] sm:min-w-[30em] md:min-w-[33em] object-cover' src="images/Lawrence_480x640-480x640.jpg" alt="image" />
                </div>
            </div>
            <div className='special-member-item2 flex relative justify-center z-10 items-center'>
                <div className='second-background-text w-full flex gap-[10em] h-screen relative z-20 flex-col justify-center items-center'>
                    <div className='relative w-full flex z-0'>
                        <h2 className='first-text-effect text-[10em] min-w-[140vw] whitespace-nowrap text-[#D3FD50] font-Lausanne_500 uppercase'>Lawrence</h2>
                        <h2 className='first-text-effect text-[10em] min-w-[140vw] whitespace-nowrap text-[#D3FD50] font-Lausanne_500 uppercase'>Lawrence</h2>
                    </div>
                    <div className='relative w-full flex z-50'>
                        <div className='second-text-effect flex translate-x-[-100%] min-w-[180vw] items-end gap-[1em]'>
                            <h2 className='text-[10em] whitespace-nowrap text-[#D3FD50] font-Lausanne_500 uppercase'>meunier</h2>
                            <h2 className='text-[3em] my-[0.6em] whitespace-nowrap font-Lausanne_500 uppercase'>account coordination</h2>
                        </div>
                        <div className='second-text-effect flex translate-x-[-100%] min-w-[180vw] items-end gap-[1em]'>
                            <h2 className='text-[10em] whitespace-nowrap text-[#D3FD50] font-Lausanne_500 uppercase'>meunier</h2>
                            <h2 className='text-[3em] my-[0.6em] whitespace-nowrap font-Lausanne_500 uppercase'>account coordination</h2>
                        </div>
                    </div>
                </div>
                <div className='special-member-img2 absolute flex justify-center items-center h-screen w-full'>
                    <img className='rounded-[1.5em] h-[45vh] mobile:h-[55vh] sm:h-[70vh] md:h-screen min-w-[20em] mobile:min-w-[25em] sm:min-w-[30em] md:min-w-[33em] object-cover' src="images/Carl_480x640-480x640.jpg" alt="image" />
                </div>
            </div>
        </div>
    )
}

export const Member = () => {
    const timelineRef = useRef({})
    const [imagePath , setImagePath] = useState("images/SophieA_480x640-480x640.jpg")

    useGSAP(()=>{

        MemberDetails.map(elem => {

            // Member hover animation
            const tl = gsap.timeline()
            tl.to(`.bg${elem.id}`,{
                height:"100%",
                duration:0.3
            }, "S")
            tl.to(`.name${elem.id},.prof${elem.id}`,{
                color:"#000"
            }, "S")

            tl.pause()
            timelineRef.current[`textTL${elem.id}`] = tl
        })

        const imgTL = gsap.timeline({
            scrollTrigger:{
                trigger:".member-img",
                // markers:true,
                start:"36% 40%",
                end:"200% 20%",
                pin:true
            }
        })
        .from(".member-img",{
            width:"0%",
            display:"none",
            duration:0.2,
            ease:"linear"
        })

        imgTL.pause()

        timelineRef.current["imgTL"] = imgTL
    },[])

    const handleMouseEnter = (id,image) => {
        setImagePath(image)
        timelineRef.current[`textTL${id}`].play()
        console.log("Mouse Enter:",id)
    }

    const handleMouseLeave = (id) => {
        timelineRef.current[`textTL${id}`].reverse()
        console.log("Mouse Leave:",id)
    }

    return(
        <div className='text-[2vw] mobile:text-[1.5vw] md:text-[1.4vw] lg:text-[1.2vw] xl:text-[1vw] relative z-30 w-full py-[1em] flex justify-center items-center bg-black'>
            <div onMouseEnter={() => {timelineRef.current["imgTL"].play()}} onMouseLeave={() => {timelineRef.current["imgTL"].reverse()}} className='w-full flex flex-col bg-black relative z-20 my-[15em]'>
            <div className="member-img w-[18em] h-[28em] hidden sm:block md:w-[23em] md:h-[33em] overflow-hidden left-[18em] sm:left-[25em] absolute top-[-10em] z-30 rounded-2xl bg-black">
                <img className='w-full h-full object-cover' src={imagePath} alt="member-image" />
            </div>
                {MemberDetails.map((elem)=>{
                    return(
                        <div key={elem.name} onMouseEnter={() => handleMouseEnter(elem.id,elem.image)} onMouseLeave={() => handleMouseLeave(elem.id,elem.image)} className='member w-full relative flex justify-between border-y-[0.1em] border-white items-start py-[0.9em] px-[0.8em]'>
                            <div className={`bg${elem.id} absolute z-0 top-0 left-0 w-full bg-[#D3FD50]`}></div>
                            <h3 className={`prof${elem.id} text-[1.2em] relative z-10 font-Lausanne_500`}>{elem.profession}</h3>
                            <h2 className={`name${elem.id} text-[3em] relative z-10 font-Lausanne_500 uppercase`}>{elem.name}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export const AgenceImagesSection = () =>{

    const timelineRef = useRef({})

    useGSAP(()=>{
        const scrollTL = gsap.timeline({
            scrollTrigger:{
                trigger:".image-container",
                start:"0% 0%",
                end:"100% 10%",
                pin:true,
                scrub:2
            }
        })

        scrollTL.to(`#img-item2`,{
            y:"0%"
        })
        
        scrollTL.to(`#img-item3`,{
            y:"0%"
        })

        AgenceImagesDetail.map((elem)=>{
            // console.log(`.image-item${elem.id}`)
            const tl = gsap.timeline()
            
            tl.to(`.title${elem.id}`,{
                textDecorationLine:"underline"
            },"S")
    
            tl.to(`.img${elem.id}`,{
                scale:1.05,
                duration:0.5,
                ease:"linear"
            },"S")
    
            
    
            tl.pause()
    
            timelineRef.current[`hoverTL${elem.id}`] = tl

        })

    },[])

    const handleMouseEnter = (id) => {
        timelineRef.current[`hoverTL${id}`].play()
    }
    
    const handleMouseLeave = (id) => {
        timelineRef.current[`hoverTL${id}`].reverse()

    }

    return(
        <div className='image-container text-[1.5vw] md:text-[1vw] border-none py-[10vw] relative h-screen overflow-hidden w-full my-[1vw] bg-black'>
            <h3 className='text-[2em] cursor-pointer absolute my-[1em] z-60 translate-x-[-50%] left-[50%] top-0 uppercase font-Lausanne_500 text-[#fff] hover:text-[#D3FD50] '>Vior Tous Les Projets</h3>
            <div>
                {AgenceImagesDetail.map((elem)=>{
                    return <div key={elem.id} id={`img-item${elem.id}`} onMouseEnter={() => handleMouseEnter(elem.id)} onMouseLeave={() => handleMouseLeave(elem.id)} className={`z-10 cursor-pointer w-full flex justify-center items-center  h-full overflow-hidden left-0 ${elem.id == "1" ? "absolute left-0 top-0" : elem.id == "2" ? "absolute top-0 translate-y-[100%] left-0" : "absolute top-0 translate-y-[100%] left-0"} rounded-[3em]`}>
                        {/* <div className={`transparent-div relative top-0 left-0 z-50 w-full opacity-100 h-full bg-black`}></div> */}
                        <h2 className={`text-[3em] z-10 font-Lausanne_500 absolute top-[25%] -translate-y-[50%] capitalize text-white`}>{elem.name1}</h2>
                        <h2 className={`title${elem.id} text-[7em] z-10 font-Lausanne_500 absolute capitalize text-white`}>{elem.name2}</h2>
                        <img className={`img${elem.id} w-full h-full object-cover`} src={elem.image} alt="images" />
                    </div>
                })}
                
            </div>
        </div>
    )
}