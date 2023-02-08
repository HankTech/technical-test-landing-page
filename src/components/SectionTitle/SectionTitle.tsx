import React from 'react'
import Image from 'next/image'

import brush from '@/assets/BRUSH-3-2.png'

//  types 
type SectionTitleProps = {
  title: string
}

function SectionTitle({title}: SectionTitleProps) {
  return (

    <div className='flex flex-col m-auto w-[520px]'>
    <h2 className='font-Caveat text-[5rem] font-bold text-[#24272A] text-center z-10'>{title}</h2>
    <Image
      className='mt-[-4rem] opacity-50'
      src={brush}
      alt="brush"
    />
  </div>
  )
}

export default SectionTitle