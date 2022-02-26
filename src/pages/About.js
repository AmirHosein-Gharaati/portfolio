const About = () => {
  const image = require("../assets/images/me.png");
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
                  className="about__tabs__item active"
                  data-target="#education"
                >
                  education
                </button>
                <button
                  type="button"
                  className="about__tabs__item"
                  data-target="#experience"
                >
                  experience
                </button>
              </div>

              {/* Education Start */}
              <div className="about__tabs__content active" id="education">
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
              <div className="about__tabs__content" id="experience">
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

              <a href="#" className="btn">Download cv</a>
              <a href="#" className="btn">Contact me</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
