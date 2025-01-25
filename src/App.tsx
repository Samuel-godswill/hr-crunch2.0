import About from "./components/About/About"
import Attend from "./components/Attend/Attend"
import Day from "./components/Day/Day"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Newsletter from "./components/Newsletter/Newsletter"
import Speakers from "./components/Speaker/Speakers"
import Testimonials from "./components/Testimonials/Testimonials"
import Ticket from "./components/Ticket/Ticket"
import Why from "./components/Why/Why"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Speakers />
      <Attend />
      <Why />
      <Day />
      <Ticket />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
