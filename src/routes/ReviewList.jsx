import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getReviews } from "../utils/api";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    getReviews(category).then(({ reviews }) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [category]);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      <section>
        {reviews.map((review) => {
          return (
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
                height="600"
              />
              <p>{review.review_body.substr(0, 45) + "..."}</p>
              <p>{review.created_at}</p>
              <p>{review.votes}</p>
              <p>{review.comment_count}</p>
              <p></p>
            </li>
          );
        })}
      </section>
    </div>
  );
};

export default ReviewList;
