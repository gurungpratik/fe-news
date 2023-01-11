import "./SingleArticle.css";
import { useState, useEffect } from "react";
import { getSingleArticle } from "../../apiFunctions";
import { useParams } from "react-router-dom";

export default function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState([true]);

  console.log({ article_id }, "<<<article_id");
  useEffect(() => {
    getSingleArticle(article_id).then((data) => {
      console.log(data.article, "<<<here");
      setArticle(data.article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <div className="Single-Article">
        <h2>{article.title}</h2>
        <h4>{article.body}</h4>
        <h5>{article.author}</h5>
        <h5>{article.created_at}</h5>
      </div>
    </main>
  );
}