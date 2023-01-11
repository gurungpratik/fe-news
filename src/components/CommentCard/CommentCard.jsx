import "./CommentCard.css";

export default function CommentCard(comment) {
  const commentDate = comment.created_at.split("T")[0];

  return (
    <li className="Comment-Card">
      <h5>{comment.body}</h5>
      <h5 className="Comment-Author">{comment.author}</h5>
      <h5 className="Comment-Date">{commentDate}</h5>
    </li>
  );
}