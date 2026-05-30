import huddle from '../../assets/Huddle.png';
export function HuddleLandingPage() {
  return (
    <>
      <div className="project-card">
        <div className="card-preview">
          <div className="preview-icon">
            <img src={huddle} alt="" />
          </div>
        </div>
        <div className="card-body">
          <p className="card-title">Huddle Landing Page</p>
          <p className="card-desc">
            A modern landing page for a fictional tech startup with a focus on
            user experience and responsive design.
          </p>
          <div className="card-tags">
            <span className="card-tag">HTML & CSS</span>
          </div>
          <div className="card-links">
            <a
              href="https://github.com/KriteshMaharjan/Huddle-landing-page-with-responsive-design"
              target="_blank"
              className="card-link"
            >
              GitHub
            </a>
            <a href="https://kriteshmaharjan.github.io/Huddle-landing-page-with-responsive-design/" className="card-link">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
