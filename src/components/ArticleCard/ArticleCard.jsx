import { Link } from "react-router-dom";
import "./ArticleCard.css";

export default function ArticleCard({ title, author, article_id }) {

  return (
    <li key={title} className="Article-Card">
      <h2>{title}</h2>
      <h4>{author}</h4>
      <nav>
        <Link to= {`/articles/${article_id}`}>
          <button>Read more</button>
        </Link>
      </nav>
    </li>
  );
}
