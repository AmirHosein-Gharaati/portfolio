import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navbarClasses = () => {
    if (navOpen) {
      return "nav";
    } else {
      return "nav v-hidden";
    }
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="row flex-end">
          <button
            type="button"
            className="navbar__toggler"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span></span>
          </button>
          <nav className={navbarClasses()}>
            <div className="nav__inner">
              <ul>
                <li>
                  {" "}
                  <Link to="/">
                    <a className="nav__item">home</a>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/about">
                    <a className="nav__item">about</a>
                  </Link>
                </li>
                <li>
                  {" "}
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
                  {" "}
                  <Link to="/contact">
                    <a className="nav__item">contact</a>
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
