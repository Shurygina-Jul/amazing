import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default Header;
