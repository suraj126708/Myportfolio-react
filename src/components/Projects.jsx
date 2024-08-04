import React from "react";
import Card from "./Card";
import ProjectsInfo from "./ProjectInfo";

const Projects = () => {
  return (
    <section id="Projects">
      <br />
      <br />
      <br />
      <br />
      <h1 className="heading">Projects</h1>
      <hr />
      <div className="album py-5 bg-body-tertiary">
        <div className="container mt-4">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 align-items-stretch">
            {/* Cards */}

            {ProjectsInfo.map((project, idx) => {
              return (
                <Card
                  key={idx}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  link={project.link}
                />
              );
            })}
          </div>
        </div>
      </div>
      <br />
    </section>
  );
};

export default Projects;
