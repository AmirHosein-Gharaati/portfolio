import { Link } from "react-router-dom";
import workData from "../data/data.json";
import { changeTitle } from "../helper/title";
import Tilt from "../components/Tilt";

const Works = ({ title }) => {
  changeTitle(title);
  const data = workData;

  const options = {
    scale: 1.1,
    speed: 1000,
    max: 25,
  };

  return (
    <section className="works__section">
      <div className="container">
        <div className="row">
          <div className="works__title">
            <h2>Works</h2>
          </div>
        </div>
        <div className="works__content">
          {data.map((work) => {
            return (
              <Tilt className="works__item" key={work.id} options={options}>
                <div className="works__item__thumbnail">
                  <img
                    src={require("../assets/images/" + work.imageUrl)}
                    alt=""
                  />
                </div>
                <h3 className="works__item__title">{work.title}</h3>
                {work.metadata.Technologies && (
                  <span className="works__item__meta">
                    {work.metadata.Technologies}
                  </span>
                )}
                <Link className="btn" to={work.id}>
                  view project
                </Link>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
