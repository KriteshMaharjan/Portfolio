import chatbot from "../../assets/chatbot.png";
export function ChatBot() {
  return (
    <>
      <div className="project-card">
        <div className="card-preview chatbot">
          <div className="preview-icon">
            <img src={chatbot} alt="" />
          </div>
        </div>
        <div className="card-body">
          <p className="card-title">Chatbot Project</p>
          <p className="card-desc">
            An interactive chatbot built with React, deployed on Vercel.
          </p>
          <div className="card-tags">
            <span className="card-tag">React</span>
            <span className="card-tag">JavaScript</span>
            <span className="card-tag">Vercel</span>
          </div>
          <div className="card-links">
            <a
              href="https://github.com/KriteshMaharjan/chatbot-project"
              target="_blank"
              className="card-link"
            >
              GitHub
            </a>
            <a
              href="https://chatbot-project-rouge-theta.vercel.app/"
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
