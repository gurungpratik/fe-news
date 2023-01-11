import "./CommentCard.css";

export default function CommentCard(comment) {
  const commentDate = comment.created_at.split("T")[0];

  return (
    <li className="Comment-Card">
      <h3>{comment.body}</h3>
      <h3>{comment.author}</h3>
      <h3>{commentDate}</h3>
    </li>
  );
}