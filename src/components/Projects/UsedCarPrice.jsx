import carprice from "../../assets/carprice.png";
export function UsedCarPrice() {
  return (
    <>
      {" "}
      <div className="project-card">
        <div className="card-preview empty">
          <div className="preview-icon">
            <img src={carprice} alt="" />
          </div>
        </div>
        <div className="card-body">
          <p className="card-title">Used Car Price Prediction System</p>
          <p className="card-desc">
            An project to predict used car prices based on various features.
          </p>
          <div className="card-tags">
            <span className="card-tag">Python</span>
            <span className="card-tag">Sqlite</span>
          </div>
          <div className="card-links">
            <a
              href="https://github.com/KriteshMaharjan/Used-car-price-prediction-system"
              target="_blank"
              className="card-link"
            >
              GitHub
            </a>
            {/* <a href="#" className="card-link">
              Live Demo
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}
