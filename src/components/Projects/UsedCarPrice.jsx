import carprice from "../../assets/carprice.png";
import LandingPage from "../../assets/UsedCarImg/landingpage.jpeg";
import LoginPage from "../../assets/UsedCarImg/loginpage.jpeg";
import RegisterPage from "../../assets/UsedCarImg/registerpage.jpeg";
import predictionPage from "../../assets/UsedCarImg/prediction.jpeg";
import historyPage from "../../assets/UsedCarImg/history.jpeg";
import { useState } from "react";
import ProjectPreview from "../ProjectPreview";

export function UsedCarPrice() {
  const [show, setShow] = useState(false);
  const images = [LandingPage, RegisterPage, LoginPage, predictionPage, historyPage];

  return (
    <>
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
              rel="noreferrer"
              className="card-link"
            >
              GitHub
            </a>
            <button type="button" className="card-link" onClick={() => setShow(true)}>
              View Screenshots
            </button>
          </div>
          <p className="card-note">
            This project uses a local database, so the live demo is shown as screenshots instead of a deployed online version.
          </p>
        </div>
      </div>

      {show && <ProjectPreview images={images} onClose={() => setShow(false)} />}
    </>
  );
}
