const Project = () => {
  return (
    <div className="project">
      <div className="project__inner">
        <div className="project__content">
          <div className="project__header">
            <div className="project__thumbnail">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                alt=""
              />
            </div>
            <h3>App landing page</h3>
          </div>
          <div className="project__body">
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                blandit rutrum libero eget lobortis. Nunc nec velit lobortis,
                ornare sem ut, fermentum turpis. Vivamus volutpat commodo lectus
                id sagittis. Pellentesque sit amet auctor ex. Integer ultricies
                felis ut sem rutrum viverra. Mauris a massa sit amet tortor
                tincidunt vehicula. Nunc elementum nec ligula et tristique.
                Etiam at fringilla dolor. Aliquam sed venenatis ex. Nam arcu
                arcu, vehicula vel libero accumsan, iaculis rhoncus nisi. Donec
                at neque felis. Sed vehicula dui sed tempor placerat.
              </p>
            </div>
            <div className="project__general">
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
  );
};

export default Project;
