import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [navIsOpen, setNavIsOpen] = useState(false);

  const getClasses = (stringPath) => {
    const currentPath = location.pathname;
    let classes = "nav__item ";

    if (stringPath === currentPath) {
      classes += " nav__item-active ";
    }

    return classes;
  };

  const getNavItemsClasses = () => {
    let classes = "nav__items ";
    if (navIsOpen) classes += " nav__open ";
    return classes;
  };

  return (
    <header className="navbar">
      <nav className="nav">
        <div className="nav__logo">AG</div>
        <div
          className={navIsOpen ? "nav__icon nav__icon__close" : "nav__icon"}
          onClick={() => setNavIsOpen(!navIsOpen)}
        >
          <FontAwesomeIcon icon={navIsOpen ? faXmark : faHamburger} />
        </div>
        <div className={getNavItemsClasses()}>
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
              <Link className={getClasses("/works")} to="/works">
                Works
              </Link>
            </li>
            <li>
              <Link className={getClasses("/contact")} to="/contact">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
