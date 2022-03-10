import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const getClasses = (stringPath) => {
    const currentPath = location.pathname;
    let classes = "nav__item ";

    if (stringPath === currentPath) {
      classes += " nav__item-active ";
    }

    return classes;
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="row">
          <nav className="nav">
            <div className="nav__logo">AG</div>
            <div className="nav__items">
              <ul>
                <li>
                  <Link className={getClasses("/")} to="/">
                    home
                  </Link>
                </li>
                <li>
                  <Link className={getClasses("/about")} to="/about">
                    about
                  </Link>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1WTmP7O4shaqP0ZVCUHuFcHERulcZZTUv/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="nav__item"
                  >
                    portfolio
                  </a>
                </li>
                <li>
                  <Link className={getClasses("/contact")} to="/contact">
                    contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
