import "./CommentList.css";
import CommentCard from "../CommentCard/CommentCard";

export default function CommentList({ commentList, setCommentList }) {
    return (
    <main>
        <h3>Comments</h3>
        <ul className="Comment-List">
            {commentList.map((comment) => {
                return <CommentCard key={comment.comment_id} {...comment}/>
            })}
            </ul>
    </main>
  );
}
