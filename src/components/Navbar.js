import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

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
      <nav className="nav">
        <div className="nav__logo">AG</div>
        <div className="nav__icon">
          <FontAwesomeIcon icon={faHamburger} />
        </div>
        <div className="nav__items nav__open">
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
