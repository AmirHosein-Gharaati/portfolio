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
                  <a href="#" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fab fa-behance"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fab fa-dribble"></i>
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
