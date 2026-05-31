import library from "../../assets/library.png";
export function DigitalLibrary() {
  return (
    <>
      <div className="project-card">
        <div className="card-preview">
          <div className="preview-icon">
            <img src={library} alt="" />
          </div>
        </div>
        <div className="card-body">
          <p className="card-title">Digital Library Hub</p>
          <p className="card-desc">
            An CRUD operation based digital library management system with Admin
            panel.
          </p>
          <div className="card-tags">
            <span className="card-tag">HTML & CSS</span>
            <span className="card-tag">JavaScript</span>
            <span className="card-tag">MySql</span>
            <span className="card-tag">PHP</span>
          </div>
          <div className="card-links">
            <a
              href="https://github.com/KriteshMaharjan/Library-Management-System"
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
