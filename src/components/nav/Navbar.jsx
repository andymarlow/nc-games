import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Game Reviews</h2>
      <ul>
        <Link to={"/"}>
          <li>
            <h3>Home</h3>
          </li>
        </Link>
        <Link to={"/categories"}>
          <li>
            <h3>Categories</h3>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
