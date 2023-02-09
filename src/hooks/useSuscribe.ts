import React, { useState, useEffect } from 'react'

//  types
import {NewsletterTypes} from '@/types'

//  utils
import {suscribeNewletter} from '@/libs/utils.https'

export const useSuscribe = () => {
  const [loading, setLoading] = React.useState(false);

  const suscribe = async (userData: NewsletterTypes) => {
    try {
      setLoading(true)
      await suscribeNewletter(userData)
      setLoading(false)
    } catch (error) {
      console.log({error})
    }


  }

  return { loading, suscribe }
}