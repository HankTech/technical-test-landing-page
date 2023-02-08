import React from 'react'
import Image from 'next/image'

//  types
import {ArticlesTypes} from '../../types'

export default function Card({image, title, content}: ArticlesTypes) {
  return (
    <div className='max-w-[300px]'>
      <Image
        className='w-full rounded-t-[10px]'
        src={image}
        alt="brush"
        width={200}
        height={200}
      />
      <div className='px-5'>
        <h3 className='font-OpenSans font-bold text-lg text-center text-[#3F454A] my-2'>{title}</h3>
        <p className='font-OpenSans font-normal text-base text-center text-[#3F454A]'>{content}</p>
      </div>
    </div>
  )
}
