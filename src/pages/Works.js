import { useState } from "react";
import { Link } from "react-router-dom";
import workData from "../data/data.json";

const Works = () => {
  const [data, setData] = useState(workData);

  return (
    <section className="works__section">
      <div className="container">
        <div className="row">
          <div className="works__title">
            <h2>Recent Work</h2>
          </div>
        </div>
        <div className="row">
          {data.map((work) => {
            return (
              <div className="works__item" key={work.id}>
                <div className="works__item__thumbnail">
                  <img
                    src={work.imageUrl}
                    alt=""
                  />
                </div>
                <h3 className="works__item__title">{work.title}</h3>
                <Link className="btn" to="test">
                  view project
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
