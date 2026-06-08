/* 
1. add github link and target blank after completing project 
2. add screenshots of the prjects after completing project 
3. uncomment database paragraph 
*/

import HomePage from "../../assets/RentManagement/HomePage.png";
import ProjectPreview from "../ProjectPreview";

export function InProcess() {
  return (
    <>
      <div className="project-card">
        <div className="card-preview empty">
          <div className="preview-icon">
            <img src={HomePage} alt="" />
          </div>
        </div>
        <div className="card-body">
          <p className="card-title">Rent Management System</p>
          <p className="card-desc">
            An project to manage properties, tenant details, rent payments, and
            financial records.
          </p>
          <div className="card-tags">
            <span className="card-tag">React</span>
            <span className="card-tag">HTML & CSS</span>
            <span className="card-tag">Php</span>
            <span className="card-tag">MySql</span>
          </div>
          <div className="card-links">
            <a
              href=""
              //   target="_blank"
              rel="noreferrer"
              className="card-link"
            >
              GitHub
            </a>
            <button
              type="button"
              className="card-link"
              style={{ color: "green" }}
              disabled
            >
              In Process...
            </button>
          </div>
          {/* <p className="card-note">
            This project uses a local database, so the live demo is shown as screenshots instead of a deployed online version.
          </p> */}
        </div>
      </div>
    </>
  );
}
