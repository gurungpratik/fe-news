import { useState, useEffect } from "react";
import "./ArticleList.css";
import { getArticles } from "../../apiFunctions";
import ArticleCard from "../ArticleCard/ArticleCard";

export default function ArticleList({topic}) {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc")


  useEffect(() => {
    getArticles({topic, sortBy, order}).then((data) => {
      setArticleList(data.articles);
      setIsLoading(false);
    });
  }, [topic, sortBy, order]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="Articles">
      <br/>
      <section className="Sort-By">
        <h8>sort by</h8>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="created_at">date</option>
          <option value="comment_count">comment count</option>
          <option value="votes">votes</option>
          <option value="title">title</option>
        </select>
      </section>
      <section className="Order">
        <h8>order</h8>
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="asc">ascending</option>
          <option value="desc">descending</option>
        </select>
      </section>
      <ul className="Article-List">
        {articleList.map((article) => {
            return <ArticleCard key={article.article_id} {...article} />;
        })}
      </ul>
    </main>
  );
}
