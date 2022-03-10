import { Link } from "react-router-dom";

const Home = () => {
  const myImage = require("../assets/images/me.png");

  return (
    <div>
      <section className="home__section align-center">
        <div className="container">
          <div className="row align-center">
            <div className="home__text">
              <p>Hello, I'm</p>
              <h1>Amirhosein Gharaati</h1>
              <h2>Frontend Developer</h2>
              <Link to="/about">
                <a className="btn">More About Me</a>
              </Link>
              <a
                href="https://drive.google.com/file/d/1WTmP7O4shaqP0ZVCUHuFcHERulcZZTUv/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Portfolio
              </a>
            </div>
            <div className="home__img">
              <div className="img-box">
                <img src={myImage} alt="me" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
