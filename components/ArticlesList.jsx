import articleStyles from "../styles/Article.module.css"
import ArticleItem from "./ArticleItem"

export default function ArticlesList({articles}) {
  return (
    <div className={articleStyles.grid}>
        {articles.map((article, idx) => (
          <ArticleItem key={idx} article={article} />
        ))}
    </div>
  )
}
