import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact">
      <section className="contact__section">
        <div className="container">
          <div className="row">
            <div className="contact__title">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="contact__form">
              <form>
                <div className="row">
                  <div className="contact__input">
                    <input
                      type="text"
                      placeholder="Name"
                      className="contact__input-control"
                      required
                    />
                  </div>
                  <div className="contact__input">
                    <input
                      type="text"
                      placeholder="Email"
                      className="contact__input-control"
                      required
                    />
                  </div>
                  <div className="contact__input">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="contact__input-control"
                      required
                    />
                  </div>
                  <div className="contact__input">
                    <textarea
                      placeholder="Message"
                      className="contact__input-control"
                      required
                    />
                  </div>
                  <div className="submit-btn">
                    <button type="submit" className="btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="contact__info">
              <div className="contact__info__item">
                <h3>Email</h3>
                <p>amirgh1380@gmail.com</p>
              </div>
              <div className="contact__info__item">
                <h3>Phone</h3>
                <p>+98 936 572 31 24</p>
              </div>
              <div className="contact__info__item">
                <h3>Follow Me</h3>
                <div className="contact__social-links">
                  <a
                    href="https://www.linkedin.com/in/amirhosein-gharaati-6b39781b7/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__social-links__item"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    href="https://github.com/AmirHosein-Gharaati"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__social-links__item"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href="https://twitter.com/AG_1380"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__social-links__item"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a
                    href="mailto:amirgh1380@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__social-links__item"
                  >
                    <FontAwesomeIcon icon={faMailBulk} />
                  </a>
                  <a
                    href="https://t.me/AG_1380"
                    target="_blank"
                    rel="noreferrer"
                    className="contact__social-links__item"
                  >
                    <FontAwesomeIcon icon={faTelegram} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
