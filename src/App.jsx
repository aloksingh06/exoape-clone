import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Work from './Components/Work'
import Playreel from './Components/Playreel'
import Image from './Components/Image'
import Split from './Components/Split'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen bg-zinc-900 relative'>
      <div className='fixed-navbar'>
      <Navbar />
      </div>
      <Landing />
      <Work />
      <Playreel />
      <Image />
      <Split />
    </div>
  )
}

export default App