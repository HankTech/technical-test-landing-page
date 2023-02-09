import React, { useState, useEffect } from 'react'

//  types
import {ArticlesTypes, ArticleCategory} from '@/types'

//  utils
import {getArticles} from '@/libs/utils.https'

export const useArticles = (filter?: ArticleCategory) => {
  const [articles, setArticles] = useState<ArticlesTypes[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    getArticles(filter)
      .then(result => {
        // console.log(result)
        setArticles(result)
      })
      .catch(error => {
        setError(error)
      })
  }, [filter, error])
  

  return {
    articles,
    error
  }
}