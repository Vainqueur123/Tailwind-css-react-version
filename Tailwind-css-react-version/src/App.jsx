import Footer from "./Footer"
import HeroSection from "./HeroSection"
import MapSection from "./MapSecction"
import Navbar from "./Navbar"
import Subscribers from "./Subscribers"
import Testimonial from "./Testimonial"


function App() {
  
  return(
    <div className="ml-25">
      <Navbar/>
      <HeroSection/>
      <MapSection/>
      <Testimonial/>
      <Subscribers/>
      <Footer/>
    </div>
  )
}
 

export default App
