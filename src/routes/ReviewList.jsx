import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getReviews } from "../utils/api";
import "../styles/ReviewList.css";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { category } = useParams();

  useEffect(() => {
    getReviews(category)
      .then(({ reviews }) => {
        setReviews(reviews);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [category]);

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
      <ul className="review-list">
        {reviews.map((review) => {
          return (
            <li className="review-list-single" key={review.review_id}>
              <Link to={`/reviews/${review.category}/${review.review_id}`}>
                <h1>{review.title}</h1>
              </Link>
              <p>{review.owner}</p>
              <p>{review.designer}</p>
              <Link to={`/reviews/${review.category}`}>
                <p>{review.category}</p>
              </Link>
              <img
                className="Review-Image"
                src={review.review_img_url}
                alt={review.review_title}
                width="400"
                height="350"
              />
              <p>{review.review_body.substr(0, 45) + "..."}</p>
              <p>{review.created_at}</p>
              <p>{review.votes}</p>
              <p>{review.comment_count}</p>
              <p></p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ReviewList;
