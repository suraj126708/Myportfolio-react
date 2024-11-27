function Navbar() {
  return (
    <div className="nav-bar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="https:this is ">
            MyPortfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https:this is "
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="mailto:suraj.gitte23@vit.edu">
                  Contact Me
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="https:this is"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  MY Work
                </a>
                <ul className="dropdown-menu">
                  <li key="projects">
                    <a className="dropdown-item" href="#projects">
                      Projects
                    </a>
                  </li>
                  <li key="my-skills">
                    <a className="dropdown-item" href="#my-skills">
                      Expert in
                    </a>
                  </li>
                  <li key="others">
                    <hr className="dropdown-divider" />
                  </li>
                  <li key="others">
                    <a className="dropdown-item" href="https:this is ">
                      Others
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
