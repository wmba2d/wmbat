import { getAllArticles } from './mdx'

export async function getAllArticlesProp () {
    const articles = await getAllArticles()

    articles  
      .sort((a: any, b: any) => {
        const x = parseInt(a.publishedAt.replace('-', ''), 10)
        const y = parseInt(b.publishedAt.replace('-', ''), 10)
  
        if (x > y) return 1
        if (x < y) return -1
  
        return 0
      })
  
    return {
      props: {
        posts: articles.reverse(),
      },
    }
}

