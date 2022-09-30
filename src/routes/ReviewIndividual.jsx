import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviewById } from "../utils/api";
import ReviewVote from "../components/ReviewVote";

const ReviewIndividual = () => {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { review_id } = useParams();

  useEffect(() => {
    getReviewById(review_id)
      .then(({ review }) => {
        setReview(review);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [review_id]);

  if (error) {
    return (
      <h2>
        Content not found, please enter a valid review id or category
        <br />
        {error}
      </h2>
    );
  }
  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      <section>
        <li key={review.review_id}>
          <h1>{review.title}</h1>
          <p>{review.owner}</p>
          <p>{review.designer}</p>
          <Link to={`/reviews/${review.category}`}>
            <p>{review.category}</p>
          </Link>
          <img
            className="Review-Image"
            src={review.review_img_url}
            alt={review.review_title}
            width="600"
            height="auto"
          />
          <p>{review.review_body}</p>
          <p>Date Posted: {review.created_at}</p>
          <ReviewVote votes={review.votes} review_id={review_id} />
          <p>Comments: {review.comment_count}</p>
        </li>
      </section>
    </div>
  );
};

export default ReviewIndividual;
