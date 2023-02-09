import React, { useState } from 'react'
import Image from 'next/image'

//  assets
import brush from '@/assets/BRUSH-3-2.png'

//  Icons
import ArrowRight from '@/components/images/ArrowRight'

//  types
import {ArticlesTypes, ArticleCategory} from '@/types'

//  hooks
import {useArticles} from '@/hooks/useArticles'

//  component
import Card from '@/components/Card'
import SectionTitle from '../SectionTitle/SectionTitle'

export default function OurArticles() {
  const [filter, setFilter] = useState<ArticleCategory | undefined>(undefined)

   const {articles} = useArticles(filter)

  const setAllArticles = () => {
    setFilter(undefined)
  }

  const setProductsArticles = () => {
    setFilter('productos')
  }

  const setTipsArticles = () => {
    setFilter('consejos')
  }

  const setRecipesArticles = () => {
    setFilter('recetas')
  }

  return (
    <section>
      <SectionTitle title='Nuestros artículos' />

      <div className='w-full flex px-10 gap-3'>
        <div className='w-[30%] px-5 h-full'>
          <ul className='ml-20'>
            <li className='mb-6 flex justify-between items-center'>
              <button className='uppercase font-OpenSans text-base' onClick={setAllArticles}>Todos</button>
              {filter === undefined && <ArrowRight width={20} height={20} />}
            </li>
            <li className='mb-6 flex justify-between items-center'>
              <button className='uppercase font-OpenSans text-base' onClick={setProductsArticles}>Productos</button>
              {filter === 'productos' && <ArrowRight width={20} height={20} />}
            </li>
            <li className='mb-6 flex justify-between items-center'>
              <button className='uppercase font-OpenSans text-base' onClick={setRecipesArticles}>Recetas</button>
              {filter === 'recetas' && <ArrowRight width={20} height={20} />}
            </li>
            <li className='mb-6 flex justify-between items-center'>
              <button className='uppercase font-OpenSans text-base' onClick={setTipsArticles}>Consejos</button>
              {filter === 'consejos' && <ArrowRight width={20} height={20} />}
            </li>
          </ul>
        </div>

        <div className='w-[70%] grid grid-cols-3 gap-6 justify-items-center'>
          {articles.map(({image, title, id, content}) => {
            return (
              <Card key={`-${id}-1`} image={image} title={title} content={content} />
            )
          })}
        </div>
      </div>
    </section>
  )
}
