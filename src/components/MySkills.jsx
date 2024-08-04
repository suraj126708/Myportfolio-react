import React from "react";

function MySkills() {
  const schools = [
    {
      name: "New High School Parli.V",
      description:
        "Alumnus: Nurtured in Knowledge, Achieving Excellence with a Remarkable 96%. Paving the Path to Success, One Lesson at a Time.",
      icon: "fa-solid fa-school",
      link: "https://schools.org.in/bid/27270800159/new-highschool-parli.html",
    },
    {
      name: "Yogeshawari Mahavidyalai, Ambajogai",
      description:
        "Completed college from Yogeshawari Mahavidyalai, Ambajogai. Boarded Success: Marked 74% in Boards, Soared to 97.63%tile in CET. Elevating Educational Heights with Diligence and Excellence.",
      icon: "fa-solid fa-building-columns",
      link: "https://yogeshwariscience.org/",
    },
    {
      name: "VIT Pune",
      description:
        "Pursuing 1st Year at VIT Pune: Embarking on a Thrilling Academic Voyage. From Boards to Campus, the Journey Unfolds at VIT.",
      icon: "fa-solid fa-graduation-cap",
      link: "https://www.vit.edu/",
    },
  ];

  return (
    <section id="my-skills">
      <div className="container px-4 py-5">
        <h2 className="pb-2 border-bottom">My Skills And About Me</h2>

        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-3">
          <div className="col d-flex flex-column align-items-start gap-2">
            <h2 className="fw-bold text-body-emphasis">
              Hello! I am Suraj Gitte, A web developer and UI/UX designer
            </h2>
            <p className="text-body-secondary">
              Enthusiastic and detail-oriented frontend developer with strong
              skills in HTML, CSS, JavaScript, and React. Backend experience in
              Node.js and Express. Proficient in designing user interfaces with
              Figma, focusing on user experience. Skilled in creating responsive
              web applications, debugging, optimizing code, and integrating
              APIs. Experienced in collaborating with cross-functional teams,
              testing applications, and maintaining systems. Eager to leverage
              my skills in a dynamic team to contribute to impactful projects
              and grow in web development.
            </p>
          </div>

          <div className="col">
            <div className="row row-cols-1 row-cols-sm-2 g-4">
              {schools.map((school, index) => (
                <div key={index} className="col d-flex flex-column gap-2">
                  <div
                    className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"
                    style={{ height: 60, width: 70 }}
                  >
                    <a href={school.link} target="_blank">
                      <i className={school.icon}></i>
                    </a>
                  </div>
                  <h4 className="fw-semibold mb-0 text-body-emphasis">
                    {school.name}
                  </h4>
                  <p className="text-body-secondary">{school.description}</p>
                </div>
              ))}
              <div className="col d-flex flex-column gap-2">
                <div
                  className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"
                  style={{ height: 60, width: 70 }}
                >
                  <i className="fa-solid fa-briefcase"></i>
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">
                  Work experience
                </h4>
                <p className="text-body-secondary">
                  ....................................................
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MySkills;
