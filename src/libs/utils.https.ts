import axios from 'axios'

//  types
import {ArticlesTypes, ArticleCategory, NewsletterTypes} from '@/types'

export const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const instance = axios.create({
  baseURL: 'https://5eed24da4cbc340016330f0d.mockapi.io/api',
});

export const getArticles = async (filter?: ArticleCategory): Promise<ArticlesTypes[]> =>  {
  const { data } = await instance.get("/articles", {
    params: {
      filter: filter || "",
    },
  })
  return data
}

export const suscribeNewletter = async (userData: NewsletterTypes): Promise<void> => {
  const { data } = await instance.post("/newsletter", userData)
  return data
}