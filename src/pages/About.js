import { useState } from "react";
import { Link } from "react-router-dom";
import { changeTitle } from "../helper/title";

const About = ({ title }) => {
  changeTitle(title);
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
          <div className="about__content">
            <div className="about__img">
              <div className="img-box">
                <img src={image} alt="about img" />
              </div>
            </div>
            <div className="about__text">
              <p>
                Hello. I'm Amirhosein Gharaati. A frontend developer with 1 year
                of experience who is trying to learn different things about
                Computer Science. I always like to encounter different
                challenges and efficiently solve problems. Also, I have some
                experience in competitive programming which helps me think and
                solve real-world problems in a better way.
              </p>
              <h3>Skills</h3>
              <div className="about__skills">
                <div className="about__skills__item">html</div>
                <div className="about__skills__item">CSS</div>
                <div className="about__skills__item">JavaScript</div>
                <div className="about__skills__item">TypeScript</div>
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
                    <span className="timeline__item__date">2020 - Present</span>
                    <h4>
                      Bachelor of Science in Computer Engineering |{" "}
                      <span>Shiraz university</span>
                    </h4>
                    <p>
                      Shiraz University is one of the top universities in Iran.
                      I am currently studying Computer Engineering. My current
                      GPA is 17.11/20 which is among the top 5 students.
                    </p>
                  </div>
                  <div className="timeline__item">
                    <span className="timeline__item__date">2018 - 2020</span>
                    <h4>
                      Diploma in Mathematics-Physics |{" "}
                      <span>Shahid Dastgheib</span>
                    </h4>
                    <p>
                      I chose the Mathematics-Physics field to continue my study
                      in Computer Engineering. Studying in Shahid Dastgheib
                      school was a great experience to learn and improve.
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className={getClassTab("experience")}>
                <div className="timeline">
                  <div className="timeline__item">
                    <span className="timeline__item__date">Mar 2022</span>
                    <h4>Twitter Homepage</h4>
                    <p>
                      Twitter homepage clone with React.js framework. I used
                      Scss for styling and some static data to render the
                      components.
                    </p>
                    <p className="bold">
                      Repo:{" "}
                      <a
                        href="https://github.com/AmirHosein-Gharaati/Twitter-Home"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Twitter-Home
                      </a>
                    </p>
                  </div>

                  <div className="timeline__item">
                    <span className="timeline__item__date">
                      Sep 2021 – Dec 2021
                    </span>
                    <h4>Turk Cryptourrency Exchange Front-end</h4>
                    <p>
                      I Worked as a member of the front-end team for Turk
                      Cryptocurrency website. Designed and developed UIs and
                      some logic and API calls to backend. We used Vue.js
                      framework and Typescript in this project.
                    </p>
                    <p className="bold">
                      Link:{" "}
                      <a
                        href="https://trk.alimahdiyar.ir/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        trk.alimahdiyar.ir
                      </a>
                    </p>
                  </div>

                  <div className="timeline__item">
                    <span className="timeline__item__date">
                      Aug 2021 – Sep 2021
                    </span>
                    <h4>Shiraz University Semester Web Application</h4>
                    <p>
                      A front-end website which manages crawled data from Shiraz
                      University term semester website.
                    </p>
                    <p className="bold">
                      Repo:{" "}
                      <a
                        href="https://github.com/AmirHosein-Gharaati/sess-semester"
                        target="_blank"
                        rel="noreferrer"
                      >
                        sess-semester
                      </a>
                    </p>
                  </div>

                  <div className="timeline__item">
                    <span className="timeline__item__date">
                      Apr 2021 – Sep 2021
                    </span>
                    <h4>Head of IT Team at Hour Of Code (HOC)</h4>
                    <p>
                      HOC is an all-day event held by computer engineering
                      students at Shiraz University to familiarize high school
                      students with coding. However, the event was held online
                      due to COVID-19 and our team developed a new{" "}
                      <a
                        href="https://hocshirazu.ir/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Website
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://github.com/AmirHosein-Gharaati/HOC-Game"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Game
                      </a>{" "}
                      for the event.
                    </p>
                  </div>

                  <div className="timeline__item">
                    <span className="timeline__item__date">
                      Oct 2020 – Feb 2021
                    </span>
                    <h4>Member of Association for Computing Machinery</h4>
                    <p>
                      Holding several different workshops including AI and
                      Telegram-bot development.
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
