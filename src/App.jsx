import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';
import MacContainer from './Components/MacContainer';

const App = () => {
  return (
    <div className='w-full h-screen'>
      <div className='navbar flex gap-7 mt-5 absolute top-0 left-1/2 -translate-x-1/2'>
        {["iPhone", "iPad", "mac", "Watch", "AirPods", "TV & Home", "Entertainment", "Accessories", "Services", "Support"]
        .map(e => <a href='' className='text-white font-[400] text-sm'>{e}</a>)}
      </div>
      <div className="absolute flex flex-col items-center text-white top-25 left-1/2 -translate-x-1/2">
        <h3 className='masked text-7xl tracking-tighter font-[700] mb-10'>macbook pro.</h3>
        <h5>Oh so pro!</h5>
        <p className='text-center w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minima nisi placeat? Expedita.</p>
      </div>
      <Canvas camera={{ fov:12, position:[0, -10, 220]}}>
        <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",]}/>
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
    
  )
}

export default App