import { useState, useEffect } from "react";
import "./ArticleList.css";
import { getAllArticles } from "../../apiFunctions";
import NavBar from "../NavBar/NavBar";
import ArticleCard from "../ArticleCard/ArticleCard";

export default function ArticleList() {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  useEffect(() => {
    getAllArticles().then((data) => {
      setArticleList(data.articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="Articles">
      <NavBar />
      <ul className="Article-List">
        {articleList.map((article) => {
            return <ArticleCard key={article.article_id} {...article} />;
        })}
      </ul>
    </main>
  );
}
