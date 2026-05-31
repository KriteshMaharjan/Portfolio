import library from "../../assets/library.png";
import ActiveBooks from "../../assets/DigitalLibrary/ActiveBooks.jpeg";
import AddBooks from "../../assets/DigitalLibrary/AddBooks.jpeg";
import AdminPage from "../../assets/DigitalLibrary/AdminPage.jpeg";
import BorrowReq from "../../assets/DigitalLibrary/BorrowReq.jpeg";
import DetailPage from "../../assets/DigitalLibrary/DetailPage.jpeg";
import ExplorePage from "../../assets/DigitalLibrary/ExplorePage.jpeg";
import HomePage from "../../assets/DigitalLibrary/HomePage.jpeg";
import LoginPage from "../../assets/DigitalLibrary/LoginPage.jpeg";
import ManageBooks from "../../assets/DigitalLibrary/ManageBooks.jpeg";
import PayedFine from "../../assets/DigitalLibrary/PayedFine.jpeg";
import PendingFine from "../../assets/DigitalLibrary/PendingFine.jpeg";
import ProfilePage from "../../assets/DigitalLibrary/ProfilePage.jpeg";
import RegisterPage from "../../assets/DigitalLibrary/RegisterPage.jpeg";
import ReturnedBook from "../../assets/DigitalLibrary/ReturnedBook.jpeg";
import { useState } from "react";
import ProjectPreview from "../ProjectPreview";

export function DigitalLibrary() {
  const [show, setShow] = useState(false);
  const images = [
    HomePage,
    RegisterPage,
    LoginPage,
    ProfilePage,
    ExplorePage,
    DetailPage,
    AdminPage,
    BorrowReq,
    ActiveBooks,
    ReturnedBook,
    AddBooks,
    ManageBooks,
    PendingFine,
    PayedFine,
  ];

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
              rel="noreferrer"
              className="card-link"
            >
              GitHub
            </a>
            <button
              type="button"
              className="card-link"
              onClick={() => setShow(true)}
            >
              View Screenshots
            </button>
          </div>
          <p className="card-note">
            This project uses a local database, so the live demo is shown as
            screenshots instead of a deployed online version.
          </p>
        </div>
      </div>

      {show && (
        <ProjectPreview images={images} onClose={() => setShow(false)} />
      )}
    </>
  );
}
