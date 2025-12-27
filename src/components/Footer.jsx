import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    // DARK MODE TOGGLE
    const toggle = document.getElementById("themeToggle");
    if (toggle) {
      toggle.onclick = () => {
        document.documentElement.dataset.bsTheme =
          document.documentElement.dataset.bsTheme === "dark"
            ? "light"
            : "dark";
      };
    }

    // TYPING EFFECT
    const roles = [
      "Full Stack MERN Developer",
      "React.js Developer",
      "Node.js & MongoDB Enthusiast",
      "Building Modern Web Apps 🚀",
    ];

    let i = 0,
      j = 0,
      current = "",
      isDeleting = false;

    const typingElement = document.getElementById("typing");

    function typeEffect() {
      if (!typingElement) return;

      if (!isDeleting && j <= roles[i].length) {
        current = roles[i].substring(0, j++);
      } else if (isDeleting && j >= 0) {
        current = roles[i].substring(0, j--);
      }

      typingElement.textContent = current;

      if (j === roles[i].length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
      }

      if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % roles.length;
      }

      setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    typeEffect();
  }, []);

  return (
    <footer className="py-5 bg-dark text-light position-relative">
      <div className="container">
        <div className="row g-4">
          {/* About */}
          <div className="col-md-4 fade-up">
            <h5 className="fw-bold">Vaishnavi Thakare</h5>
            <p className="mt-3 fw-bold">
              Thank you for visiting my personal portfolio website. Let’s
              connect and grow together 🚀
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 fade-up delay-1">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled mt-3 footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 fade-up delay-2">
            <h5 className="fw-bold">Contact Info</h5>

            <p className="mt-3">
              <i className="fas fa-phone me-2 text-primary"></i> +91 7709031876
            </p>
            <p>
              <i className="fas fa-envelope me-2 text-primary"></i>{" "}
              tvaishnavi212@gmail.com
            </p>
            <p>
              <i className="fas fa-location-dot me-2 text-primary"></i> Pune,
              India
            </p>

            {/* Social Icons */}
            <div className="footer-socials mt-3">
              <a
                href="https://www.linkedin.com/in/vaishnavi-thakare-349284326"
                className="fab fa-linkedin"
              ></a>
              <a
                href="https://github.com/tvaishnavi11"
                className="fab fa-github"
              ></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-telegram-plane"></a>
              <a
                href="mailto:tvaishnavi212@gmail.com"
                className="fas fa-envelope"
              ></a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center small">
          © 2025 Vaishnavi Thakare · Made with <span className="heart">❤️</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
