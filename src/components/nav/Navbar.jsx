import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Game Reviews</h2>
      <ul>
        <Link to={"/"}>
          <li>
            <a>Home</a>
          </li>
        </Link>
        <Link to={"/categories"}>
          <li>
            <a>Categories</a>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
