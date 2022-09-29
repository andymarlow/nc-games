import { getCategories } from "../utils/api";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    getCategories()
      .then(({ categories }) => {
        setCategories(categories);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [slug]);

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
        <ul className="categories-list">
          {categories.map((category) => {
            return (
              <Link to={`/reviews/${category.slug}`} key={category.slug}>
                <li className={`category ${category.slug}`}>
                  <h2>{category.slug}</h2>
                </li>
              </Link>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Categories;
