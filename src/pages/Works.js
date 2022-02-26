const Works = () => {
  return (
    <div>
      <section className="works__section">
        <div className="container">
          <div className="row">
            <div className="works__title">
              <h2>Recent Work</h2>
            </div>
          </div>
          <div className="row">
            <div className="works__item">
              <div className="works__item__thumbnail">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                  alt=""
                />
              </div>
              <h3 className="works__item__title">Education Course Website</h3>
              <button type="button" className="btn">
                view project
              </button>
              <div className="works__item__details">
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    blandit rutrum libero eget lobortis. Nunc nec velit
                    lobortis, ornare sem ut, fermentum turpis. Vivamus volutpat
                    commodo lectus id sagittis. Pellentesque sit amet auctor ex.
                    Integer ultricies felis ut sem rutrum viverra. Mauris a
                    massa sit amet tortor tincidunt vehicula. Nunc elementum nec
                    ligula et tristique. Etiam at fringilla dolor. Aliquam sed
                    venenatis ex. Nam arcu arcu, vehicula vel libero accumsan,
                    iaculis rhoncus nisi. Donec at neque felis. Sed vehicula dui
                    sed tempor placerat.
                  </p>
                </div>
                <div className="works__item__general">
                  <ul>
                    <li>
                      Created - <span>4 Dec 2020</span>
                    </li>
                    <li>
                      Technologies used - <span>HTML, CSS</span>
                    </li>
                    <li>
                      Role - <span>Fronted</span>
                    </li>
                    <li>
                      View Online{" "}
                      <span>
                        <a href="www.test.com" target="_blank">
                          www.test.com
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
