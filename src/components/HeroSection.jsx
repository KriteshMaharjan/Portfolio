import "./HeroSection.css";
export function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero fade-in">
        <h1>
          Kritesh
          <br />
          Maharjan
        </h1>
        <p>
          Frontend developer building clean, interactive interfaces with React.
          Currently a BCA student at Tribhuvan University, Kathmandu.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Get in touch
          </a>
          <a
            href="d:\Protfolio\resume.pdf"
            download="Resume.pdf"
            className="btn btn-primary"
          >
            Download Resume
          </a>
        </div>
      </section>
    </>
  );
}
