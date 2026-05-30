import introsection from '../../assets/introsection.png';
export function IntroSection() {
  return (
    <>
      <div className="project-card">
        <div className="card-preview introsection">
          <div className="preview-icon">
            <img src={introsection} alt="" />
          </div>
        </div>
        <div className="card-body">
          <p className="card-title">Intro Section</p>
          <p className="card-desc">
            A modern landing page for a fictional tech startup with a focus on
            user experience and responsive design.
          </p>
          <div className="card-tags">
            <span className="card-tag">HTML & CSS</span>
            <span className="card-tag">JavaScript</span>

          </div>
          <div className="card-links">
            <a
              href="https://github.com/KriteshMaharjan/intro-section-with-dropdown-navigation-main"
              target="_blank"
              className="card-link"
            >
              GitHub
            </a>
            <a
              href="https://kriteshmaharjan.github.io/intro-section-with-dropdown-navigation-main/"
              target="_blank"
              className="card-link"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
