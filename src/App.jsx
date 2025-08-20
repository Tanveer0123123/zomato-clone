
import './App.css'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import Home from './components/Home/Home'
import Section2 from './components/Section2/Section2'
import Section3 from './components/Section3/Section3'
import Section4 from './components/Section4/Section4'
import StatsSection from './components/StatsSection/StatsSection'
import ZomatoGold from './components/ZomatoGold/ZomatoGold'

function App() {
  
  return (
   <div>
      <Home/>
      <StatsSection/>
      <Section2/>
      <ZomatoGold/>
      <Section3/>
      <Section4/>
      <Footer/>
   </div>
  )
}

export default App
