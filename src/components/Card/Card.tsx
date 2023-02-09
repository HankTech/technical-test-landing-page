import React from 'react'
import Image from 'next/image'

//  types
import {ArticlesTypes} from '../../types'

export default function Card({image, title, content}: ArticlesTypes) {
  return (
    <div className='group max-w-[300px] mb-16 shadow-lg pb-10 rounded-[10px]'>
      <Image
        className='w-full rounded-t-[10px]'
        src={image}
        alt="brush"
        width={200}
        height={200}
      />
      <div className='px-5'>
        <h3 className='font-OpenSans font-bold text-lg text-center text-[#3F454A] my-5 group-hover:text-[#D8AD3D]'>{title}</h3>
        <p className='font-OpenSans font-normal text-base text-center text-[#3F454A]'>{content}</p>
        <p className='group-hover:visible invisible uppercase font-OpenSans font-bold text-base pl-5 mt-6 text-[#D8AD3D]'>Ver mas</p>
      </div>
    </div>
  )
}
