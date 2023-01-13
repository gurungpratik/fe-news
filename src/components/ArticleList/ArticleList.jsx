import { useState, useEffect } from "react";
import "./ArticleList.css";
import { getArticles } from "../../apiFunctions";
import ArticleCard from "../ArticleCard/ArticleCard";

export default function ArticleList({topic}) {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  useEffect(() => {
    getArticles(topic).then((data) => {
      setArticleList(data.articles);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="Articles">
      <ul className="Article-List">
        {articleList.map((article) => {
            return <ArticleCard key={article.article_id} {...article} />;
        })}
      </ul>
    </main>
  );
}
