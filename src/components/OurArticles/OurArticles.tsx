import React from 'react'
import Image from 'next/image'

import brush from '@/assets/BRUSH-3-2.png'


//  types
import {ArticlesTypes} from '../../types'

type OurArticlesProps = {
  data: ArticlesTypes[]
}

//  component
import Card from '@/components/Card'
import SectionTitle from '../SectionTitle/SectionTitle'

export default function OurArticles({data}: OurArticlesProps) {
  return (
    <section>
      <SectionTitle title='Nuestros artículos' />

      <div className='w-full flex px-10'>
        <div className='w-[30%]'>
          <ul className='ml-20'>
            <li className='mb-6'>
              <button className='uppercase font-OpenSans text-base'>Todos</button>
            </li>
            <li className='mb-6'>
              <button className='uppercase font-OpenSans text-base'>Productos</button>
            </li>
            <li className='mb-6'>
              <button className='uppercase font-OpenSans text-base'>Recetas</button>
            </li>
            <li className='mb-6'>
              <button className='uppercase font-OpenSans text-base'>Consejos</button>
            </li>
          </ul>
        </div>

        <div className='w-[70%] grid  grid-cols-3 gap-4 justify-items-center'>
          {data.map(({image, title, id, content}) => {
            console.log({image, title, id, content})
            return (
              <Card key={`-${id}-1`} image={image} title={title} content={content} />
            )
          })}
        </div>
      </div>
    </section>
  )
}
