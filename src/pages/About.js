import { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const image = require("../assets/images/me.png");

  const [currentActive, setCurrentActive] = useState("education");

  const getClassTab = (tabName) => {
    let classes = "about__tabs__content ";
    if (!(tabName === currentActive)) classes += " hidden ";
    return classes;
  };

  const getButtonClass = (buttonName) => {
    let classes = "about__tabs__item ";
    if (buttonName === currentActive) classes += " active ";
    return classes;
  };

  return (
    <div>
      <section className="about__section">
        <div className="container">
          <div className="row">
            <div className="about__title">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about__img">
              <div className="img-box">
                <img src={image} alt="about img" />
              </div>
            </div>
            <div className="about__text">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <h3>Skills</h3>
              <div className="about__skills">
                <div className="about__skills__item">html</div>
                <div className="about__skills__item">CSS</div>
                <div className="about__skills__item">JavaScript</div>
                <div className="about__skills__item">Vue</div>
                <div className="about__skills__item">React</div>
              </div>

              <div className="about__tabs">
                <button
                  type="button"
                  className={getButtonClass("education")}
                  onClick={() => setCurrentActive("education")}
                >
                  education
                </button>
                <button
                  type="button"
                  className={getButtonClass("experience")}
                  onClick={() => setCurrentActive("experience")}
                >
                  experience
                </button>
              </div>

              {/* Education Start */}
              <div className={getClassTab("education")}>
                <div className="timeline">
                  <div className="timeline__item">
                    <span className="timeline__item__date">2013 - 2016</span>
                    <h4>
                      Bachelor of Technology - <span>Shiraz university</span>
                    </h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters
                    </p>
                  </div>
                  <div className="timeline__item">
                    <span className="timeline__item__date">2013 - 2016</span>
                    <h4>
                      Bachelor of Technology - <span>Shiraz university</span>
                    </h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters
                    </p>
                  </div>
                  <div className="timeline__item">
                    <span className="timeline__item__date">2013 - 2016</span>
                    <h4>
                      Bachelor of Technology - <span>Shiraz university</span>
                    </h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className={getClassTab("experience")}>
                <div className="timeline">
                  <div className="timeline__item">
                    <span className="timeline__item__date">2013 - 2016</span>
                    <h4>
                      TurkCrypto - <span>Shiraz university</span>
                    </h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://drive.google.com/file/d/1WTmP7O4shaqP0ZVCUHuFcHERulcZZTUv/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Download cv
              </a>
              <Link className="btn" to="/contact">
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
