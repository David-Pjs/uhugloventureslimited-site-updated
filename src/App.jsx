import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import AboutUs from './components/About';
export default function App() {
  return (
   <>
<Navbar />
<div id="home">
  <HeroSection/>
</div>
<div id="about">
  <AboutUs/>
</div>
<div id="contact">
  <ContactUs />
</div>
<Footer />

</>
)
}