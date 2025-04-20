import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Hero from './components/Hero'
// import CardSlider from './components/CardSlider'
import Navbar from './components/Navbar'
import About from './components/About'
import Features from './components/Features'
import Story from './components/Story'  
// import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {

  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero />
      {/* <CardSlider/> */}
      <About />
      <Features/>
      <Story/>
      {/* <Contact/> */}
      <Footer/>
      {/* <section className='z-0 min-h-screen bg-violet-500'></section> */}
    </main>
  )
}

export default App
