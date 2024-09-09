import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Play from './Components/Play'
import Featuredp from './Components/Featuredp'

function App() {
  return (
    <div className='w-full h-screen bg-white-900 text-black'>
      <Navbar />
      <Landing/>
      <Marquee/>
      <About/>
      <Play/>
      <Featuredp/>
    </div>
  )
}

export default App
