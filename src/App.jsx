// import './App.css'
// import Footer from './components/Footer/Footer'
// import HeroSection from './components/HeroSection/HeroSection'
// import Home from './components/Home/Home'
// import ScrollStack from './components/ScrollStack/ScrollStack'
// import Section2 from './components/Section2/Section2'
// import Section3 from './components/Section3/Section3'
// import Section4 from './components/Section4/Section4'
// import ZomatoGold from './components/ZomatoGold/ZomatoGold'

// function App() {
//   return (
//     <div>
//       <ScrollStack>
//         <Home/>
//         <HeroSection/>   {/* 👈 alag panel */}
//         <Section2/>
//         <ZomatoGold/>
//         <Section3/>
//         <Section4/>
//         <Footer/>
//       </ScrollStack>
//     </div>
//   )
// }

// export default App





// import './App.css'
// import Footer from './components/Footer/Footer'
// import HeroSection from './components/HeroSection/HeroSection'
// import Home from './components/Home/Home'
// import ScrollStack from './components/ScrollStack/ScrollStack'
// import Section2 from './components/Section2/Section2'
// import Section3 from './components/Section3/Section3'
// import Section4 from './components/Section4/Section4'
// import ZomatoGold from './components/ZomatoGold/ZomatoGold'
// import { useRef } from 'react'

// function App() {
//   const heroRef = useRef(null);

//   return (
//     <div>
//       <ScrollStack>
//         <Home scrollTargetRef={heroRef} />
//         <div ref={heroRef}>
//           <HeroSection />
//         </div>
//         <Section2 />
//         <ZomatoGold />
//         <Section3 />
//         <Section4 />
//         <Footer />
//       </ScrollStack>
//     </div>
//   )
// }

// export default App



import './App.css'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import Home from './components/Home/Home'
import Section2 from './components/Section2/Section2'
import Section3 from './components/Section3/Section3'
import Section4 from './components/Section4/Section4'
import ZomatoGold from './components/ZomatoGold/ZomatoGold'
import { useRef } from 'react'
import ScrollStack from './components/ScrollStack/ScrollStack'

function App() {
  const heroRef = useRef(null);

  return (
    <div>
      <ScrollStack>
        <Home scrollTargetRef={heroRef} />
        <div ref={heroRef}>
          <HeroSection />
        </div>
        <Section2 />
        <ZomatoGold />
        <Section3 />
        <Section4 />
        <Footer />
      </ScrollStack>
    </div>
  )
}

export default App
