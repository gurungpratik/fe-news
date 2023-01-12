import { useState } from "react";
import { patchArticle } from "../../apiFunctions";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";

export default function VoteChanger({ article_id, votes }) {
  const [voteInc, setVoteInc] = useState(0);
  const [error, setError] = useState(null);

  const upVote = (article_id) => {
    setVoteInc((currVoteInc) => currVoteInc + 1);
    patchArticle(article_id, 1).catch((err) => {
      setError("error occured");
      setVoteInc((currVoteInc) => currVoteInc - 1);
    });
  };

  const downVote = (article_id) => {
    setVoteInc((currVoteInc) => voteInc - 1);
    patchArticle(article_id, -1).catch((err) => {
      setError("error occured");
      setVoteInc((currVoteInc) => voteInc + 1);
    });
  };

  if (error) return error;


return (
    <div>
        <h3>{votes + voteInc} votes</h3>
        <RiThumbUpFill className="Up-Vote" onClick={() => {upVote(article_id)}}/>
        <RiThumbDownFill className="Down-Vote" onClick={() => {downVote(article_id)}}/>
    </div>
)
}




