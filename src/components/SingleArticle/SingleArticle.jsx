import "./SingleArticle.css";
import { useState, useEffect } from "react";
import { getSingleArticle, getArticleComments } from "../../apiFunctions";
import { useParams } from "react-router-dom";
import CommentList from "../CommentList/CommentList";

export default function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState([true]);
  const [commentList, setCommentList] = useState([])

  useEffect(() => {
    getSingleArticle(article_id).then((data) => {
      setArticle(data.article);
      setIsLoading(false);
    });
    getArticleComments(article_id).then((data) => {
        setCommentList(data.comments)
    })
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  if (commentList.length === 0) {
    return <p>No comments found...</p>;
  }

  const articleDate = article.created_at.split("T")[0];

  return (
    <main>
      <div className="Single-Article">
        <h1>{article.title}</h1><br/>
        <h4>{article.body}</h4><br/>
        <h4 className="Article-Author">{article.author}</h4><br/>
        <h6 className="Article-Date">{articleDate}</h6><br/>
      </div>
      <CommentList commentList={commentList}/>
    </main>
  );
}
