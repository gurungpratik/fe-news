import "./CommentAdder.css";
import { useState } from "react";
import { postComment } from "../../apiFunctions";

export default function CommentAdder({ article_id, setCommentList }) {
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, newComment).then((data) => {
      setCommentList((currComments) => [...currComments, data.comment]);
  }).catch((err) => {
    setError("error occured")
  });
  setNewComment("");
}

if (error) return error;

  return (
    <form onSubmit={handleSubmit} className="Comment-Form">

      <textarea
      name="Text1"
      cols="40"
      rows="2"
      type="text"
      className="Comment-Input"
      placeholder="Write a comment..."
      onChange={handleChange}
      value={newComment}></textarea>
      <button type="submit">Post</button>
    </form>
  );
}
