import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Healing from '../components/sections/Healing'
import Siddha from '../components/sections/Siddha'
import Gemstone from '../components/sections/Gemstone'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import CTA from '../components/sections/CTA'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Healing />
      <Siddha />
      <Gemstone />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
    </>
  )
}
