import "./BackToTop.css";
import { useEffect, useState } from "react";
export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      id="back-to-top"
      id="back-to-top"
      className={show ? "show" : ""}
      onClick={scrollTop}
    >
      ↑
    </button>
  );
}
