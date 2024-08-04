import React from "react";

function Footer() {
  return (
    <section className="footer">
      <footer>
        <div className="bottom-container">
          <div className="link">
            <a
              key="linkedin"
              className="footer-link"
              href="http://www.linkedin.com/in/suraj-gitte-7b71a7288"
            >
              LinkedIn
            </a>
            <a
              key="instagram"
              className="footer-link"
              href="https://www.instagram.com/suraj_gitte_6708?igshid=OXQ5bGJhZXhyMjR2"
            >
              Instagram
            </a>
            <a
              key="github"
              className="footer-link"
              href="https://github.com/Suraj6708"
            >
              GitHub
            </a>
          </div>
          <div className="p">
            <p className="copyright">&copy; Suraj6708 @MyPortfolio</p>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
