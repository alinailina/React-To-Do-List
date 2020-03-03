import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <header>
        <h1>Get things done!</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
