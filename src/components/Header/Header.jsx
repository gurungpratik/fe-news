import "./Header.css";
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <nav>
      <Link to="/home">
        <header>
          <div>NewsHub</div>
        </header>
      </Link>
    </nav>
  );
}
