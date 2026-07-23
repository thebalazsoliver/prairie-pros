import Hero from '../components/Hero.jsx'
import TruckStrip from '../components/TruckStrip.jsx'
import Services from '../components/Services.jsx'
import SnowEquipment from '../components/SnowEquipment.jsx'
import MeetZane from '../components/MeetZane.jsx'
import ContactForm from '../components/ContactForm.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <TruckStrip />
      <Services />
      <SnowEquipment />
      <MeetZane />
      <ContactForm />
    </>
  )
}