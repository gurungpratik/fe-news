import "./ArticleCard.css";

export default function ArticleCard({title, author}) {
    return (
        <li key= {title} className="Article-Card">
            <h2>{title}</h2>
            <h4>{author}</h4>
        </li>
      );
}