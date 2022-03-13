import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { changeTitle } from "../helper/title";
import { useState } from "react";
import axios from "axios";

const Contact = ({ title }) => {
  changeTitle(title);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const [messageStatus, setMessageStatus] = useState(null);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !text) return;

    const data = {
      name: name,
      email: email,
      subject: subject,
      text: text,
    };

    setMessageStatus("Pending...");

    axios
      .post("/", data)
      .then((res) => {
        setMessageStatus("Sent Successfully");
      })
      .catch((err) => {
        setMessageStatus("Failed");
        console.error(err.message);
      })
      .finally(() => {
        setTimeout(() => {
          setMessageStatus(null);
        }, 3000);
      });
  };

  return (
    <div className="contact">
      <section className="contact__section">
        <div className="container">
          <div className="row">
            <div className="contact__title">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="contact__content">
            <div className="contact__form">
              <form>
                <div className="row">
                  <div className="contact__input">
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="contact__input-control"
                      required
                    />
                  </div>
                  <div className="contact__input">
                    <input
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="contact__input-control"
                      required
                    />
                  </div>
                  <div className="contact__input">
                    <input
                      type="text"
                      placeholder="Subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="contact__input-control"
                      required
                    />
                  </div>
                  <div className="contact__input">
                    <textarea
                      placeholder="Message"
                      className="contact__input-control"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    onClick={(e) => sendMessage(e)}
                    type="submit"
                    className="btn"
                  >
                    Send Message
                  </button>
                </div>
                {messageStatus !== null && (
                  <p className="contact__status">{messageStatus}</p>
                )}
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
