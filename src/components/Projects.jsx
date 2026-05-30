import { ChatBot } from "./Projects/Chatbot.jsx";
import { DigitalLibrary } from "./Projects/DigitalLibrary.jsx";
import { UsedCarPrice } from "./Projects/UsedCarPrice.jsx";
import {HuddleLandingPage} from "./Projects/HuddleLandingPage.jsx";
import {IntroSection} from "./Projects/IntroSection.jsx";
import "./Projects.css";
export function Projects() {
  return (
    <>
      {/* PROJECTS */}
      <section className="fade-in" id="projects">
        <p className="section-label">Projects</p>
        <div className="projects-grid">
          {/* Chatbot Project */}
          <ChatBot />

          {/* Library Management System */}
          <DigitalLibrary />

          {/* Used Car Price Prediction System */}
          <UsedCarPrice />

          {/* Huddle Landing Page */}
          <HuddleLandingPage />

          {/* Intro Section */}
          <IntroSection />
        </div>
      </section>

      <hr className="divider" />
    </>
  );
}
