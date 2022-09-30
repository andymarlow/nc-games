import { useState } from "react";
import { patchReviewVote } from "../utils/api";

const ReviewVote = ({ review_id, votes }) => {
  const [voteChange, setVoteChange] = useState(0);
  const [voteErr, setVoteErr] = useState(null);
  const visableVotes = votes + voteChange;

  const voteFunction = (singleVote) => {
    switch (singleVote) {
      case -1:
      case 0:
      case 1:
        patchReviewVote(review_id, singleVote)
          .then(() => {
            setVoteErr(null);
          })
          .catch(() => {
            setVoteErr(true);
            setVoteChange(voteChange);
          });
        setVoteChange((value) => value + singleVote);
        break;
      default:
        setVoteErr(true);
    }
  };

  return (
    <div>
      <p>Votes {visableVotes} </p>
      <button onClick={() => voteFunction(1)}>Up Vote</button>
      <button onClick={() => voteFunction(-1)}>Down Vote</button>
      {voteErr ? <p>Vote failed, please vote again</p> : ""}
    </div>
  );
};
export default ReviewVote;
