import React from "react";

function Card({ title, description, imageUrl, link }) {
  return (
    <div className="col align-items-stretch">
      <div className="card shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>{title}</title>
          <rect width="100%" height="100%" fill="#55595c" />
          <a href={link} target="_blank">
            <image
              href={imageUrl}
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
            />
          </a>
        </svg>
        <div className="card-body">
          <p className="card-text">
            {title}: <br />
            {description}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a href={link} target="_blank">
                <button type="button" className="btn btn-outline-info">
                  View
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
