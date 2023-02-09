export type ArticleCategory = "productos" | "recetas" | "consejos";
export interface ArticlesTypes {
  id?: number;
  createdAt?: string;
  title?: string;
  category?: string;
  image: string;
  content?: string;
  url?: string;
}

export interface NewsletterTypes {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}