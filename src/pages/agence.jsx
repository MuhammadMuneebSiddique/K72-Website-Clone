import { CenterText, PinImage, AboutDetail, SpecialMember, Member, AgenceImagesSection  } from '../components/agence/AgenceCom'
import Footer from '../components/Footer'

const Agence = () => {
  return (
    <section className='h-full w-full'>
      <div id='Agence-Container' className='h-full w-full'>
        <CenterText />
        <PinImage />
      </div>
      <AboutDetail />
      <SpecialMember />
      <Member />
      <AgenceImagesSection />
      <Footer />
    </section>
  )
}

export default Agence