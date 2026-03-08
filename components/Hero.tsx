import React from 'react';
import { Spotlight } from './ui/Spotlight';
import Spline from '@splinetool/react-spline/next';
import TextGenerateEffect from './ui/TextGenerateEffect'


const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Spotlights */}
      <div className="absolute inset-0 pointer-events-none">
        <Spotlight className='absolute -top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
        <Spotlight className='absolute -top-10 -left-full h-[80vh] w-[50vw]' fill="purple" />
        <Spotlight className='absolute -top-28 -left-80 h-[80vh] w-[50vw]' fill="blue" />
      </div>

      {/* Radial Gradient Background */}
      <div className="h-screen w-full absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Content and Spline Viewer */}
      <div className="relative w-full h-full flex items-center justify-between px-[80px]">
        {/* Text Content */}
        <div className='max-w-[55%]'>
          <TextGenerateEffect className='text-7xl font-aquire ' words="HI I'M" />
          <h1 className='text-7xl font-aquire'>NISHCHAL TENDULKAR</h1>
          <h2 className='text-5xl font-aquire mt-4'>Building AI Systems & Intelligent Applications</h2>
        </div>

        {/* Spline Viewer */}
        <div className='absolute h-[100vh] w-[100%]'>
          <Spline scene="https://prod.spline.design/yam3rxIsiwHPZQqI/scene.splinecode" className="w-full h-full m-0 p-0" />
        </div>
      </div>
    </div>
  )
}

export default Hero;
