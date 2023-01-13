import "./Header.css";
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <nav>
      <Link to="/articles">
        <header>
          <div>NewsHub</div>
        </header>
      </Link>
    </nav>
  );
}
