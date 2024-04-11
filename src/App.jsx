//import { useState } from 'react'
import './App.css'
import SkillsTools from './components/SkillsTools/SkillsTools.jsx';
import About from './components/About/About.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import OpenSection from './components/OpenSection/OpenSection.jsx';
import Experience from './components/Experience/Experience.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <OpenSection></OpenSection>

      <About></About>
      <SkillsTools></SkillsTools>
      <Experience></Experience>
      <Portfolio></Portfolio>
      <Contact></Contact>

      <Footer></Footer>
    </>
  )
}

export default App
