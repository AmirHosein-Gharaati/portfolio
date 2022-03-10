import { useState } from "react"

const Navbar = () => {

  const [navOpen, setNavOpen] = useState(false);

  const navbarClasses = () => {
    if(navOpen){
      return "nav"
    } else{
      return "nav v-hidden"
    }
  }
  
  return (
    <header className="navbar">
      <div className="container">
        <div className="row flex-end">
          <button type="button" className="navbar__toggler" onClick={() => setNavOpen(!navOpen)}>
              <span></span>
          </button>
          <nav className={navbarClasses()}>
            <div className="nav__inner">
              <ul>
                <li> <a href="#home" className="nav__item">home</a></li>
                <li> <a href="#about" className="nav__item">about</a></li>
                <li> <a href="#portfolio" className="nav__item">portfolio</a></li>
                <li> <a href="#contact" className="nav__item">contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
