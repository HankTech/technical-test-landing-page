import React from 'react'
import Image from 'next/image'

//  component
import AppBar from '../AppBar/AppBar'
import HeroTitle from '../HeroTitle/HeroTitle'

import heroImage from '@/assets/hero.png'
import brush from '@/assets/BRUSH-3-2.png'

export default function Hero() {
  return (
    <div className='bg relative'>
      <AppBar />
      <Image
        className='w-full'
        src={heroImage}
        alt="hero"
      />
      <HeroTitle />
      <Image
        className='w-full absolute top-[52%] left-[-32%] z-0'
        src={brush}
        alt="brush"
      />
    </div>
  )
}