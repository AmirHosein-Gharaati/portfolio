import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import workData from "../data/data.json";
import { changeTitle } from "../helper/title";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Project = () => {
  const { id } = useParams();
  const project = workData.filter((element) => element.id === id);

  const navigate = useNavigate();

  useEffect(() => {
    if (project.length !== 0) {
      changeTitle(project[0].title);
    } else {
      navigate("/404");
    }
  });

  return (
    project.length !== 0 && (
      <div className="project">
        <div className="project__inner">
          <div className="project__content">
            <div className="project__header">
              <div className="project__thumbnail">
                <img
                  src={require("../assets/images/" + project[0].imageUrl)}
                  alt=""
                />
              </div>
              <h3 className="project__title">{project[0].title}</h3>
            </div>
            <div className="project__body">
              <div className="description">
                <ReactMarkdown>{project[0].text}</ReactMarkdown>
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
    )
  );
};

export default Project;
