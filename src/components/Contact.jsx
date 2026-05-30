import "./contact.css";
export function Contact() {
  return (
    <>
      {/* <!-- CONTACT --> */}
      <section className="fade-in" id="contact">
        <p className="section-label">Contact</p>
        <p
          style={{
            fontSize: "16px",
            color: "var(--muted)",
            marginBottom: "1.5rem",
          }}
        >
          Open to frontend internship opportunities in Kathmandu. Feel free to
          reach out.
        </p>
        <div className="contact-row">
          <a href="mailto:kriteshmaharjan19@email.com" className="contact-link">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 7 10-7" />
            </svg>
            kriteshmaharjan19@email.com
          </a>
          <a
            href="https://github.com/KriteshMaharjan"
            target="_blank"
            className="contact-link"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.09.68-.22.68-.49v-1.71c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kritesh-maharjan-76a6b82b2/"
            className="contact-link"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452H17.21v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.985V9h3.102v1.561h.046c.432-.818 1.49-1.682 3.067-1.682 3.28 0 3.884 2.158 3.884 4.963v6.61zM5.337 7.433a1.8 1.8 0 1 1 0-3.601 1.8 1.8 0 0 1 0 3.601zm1.557 13.019H3.78V9h3.114v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </section>

      <footer>© 2026 Kritesh Maharjan · Built with HTML, CSS, JavaScript & React</footer>
    </>
  );
}
