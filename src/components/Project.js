import { useParams } from "react-router-dom";
import workData from "../data/data.json";

const Project = () => {
  const { id } = useParams();
  const project = workData.filter((element) => element.id === id);
  if (!project) {
    // print 404
  }

  return (
    <div className="project">
      <div className="project__inner">
        <div className="project__content">
          <div className="project__header">
            <div className="project__thumbnail">
              <img src={project[0].imageUrl} alt="" />
            </div>
            <h3>{project[0].title}</h3>
          </div>
          <div className="project__body">
            <div className="description">
              <p>{project[0].text}</p>
            </div>
            <div className="project__general">
              <ul>
                {Object.keys(project[0].metadata).map((key) => (
                  <li key={key}>
                    {key} - <span>{project[0].metadata[key]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
