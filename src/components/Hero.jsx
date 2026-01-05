import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Full Stack MERN Developer",
  "React.js Developer",
  "Node.js & MongoDB Enthusiast",
  "Building Modern Web Apps 🚀",
];

const socials = [
  {
    name: "LinkedIn",
    icon: "fab fa-linkedin-in",
    link: "https://www.linkedin.com/in/vaishnavi-thakare-349284326",
  },
  {
    name: "GitHub",
    icon: "fab fa-github",
    link: "https://github.com/tvaishnavi11",
  },
  {
    name: "Twitter",
    icon: "fab fa-twitter",
    link: "https://twitter.com",
  },
  {
    name: "Instagram",
    icon: "fab fa-instagram",
    link: "https://instagram.com",
  },
];

const Hero = () => {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [del, setDel] = useState(false);

  /* Typing Effect */
  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (!del && j < roles[i].length) {
          setText(roles[i].slice(0, j + 1));
          setJ(j + 1);
        } else if (del && j > 0) {
          setText(roles[i].slice(0, j - 1));
          setJ(j - 1);
        } else if (!del) {
          setDel(true);
        } else {
          setDel(false);
          setI((i + 1) % roles.length);
        }
      },
      del ? 50 : 100
    );

    return () => clearTimeout(timer);
  }, [j, del, i]);

  return (
    <section
      id="home"
      className="hero-section min-vh-100 d-flex align-items-center position-relative overflow-hidden"
    >
      <div className="animated-bg position-absolute w-100 h-100"></div>

      <div className="container position-relative">
        <div className="row align-items-center min-vh-100 text-center text-lg-start">
          {/* TEXT */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h1 className="fw-bold display-5 mb-3">
              Hi, I’m <span className="text-gradient">Vaishnavi Thakare</span>
            </h1>

            <h5 className="text-muted mb-4 typing-text">
              {text}
              <span className="cursor">|</span>
            </h5>

            {/* CTA */}
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a href="/contact" className="btn btn-primary btn-lg px-4">
                Hire Me
              </a>
            </motion.div>

            {/* SOCIAL ICONS */}
            <motion.ul
              className="d-flex gap-3 p-0 m-0 list-unstyled justify-content-center justify-content-lg-start"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {socials.map((social) => (
                <motion.li
                  key={social.name}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -6, scale: 1.15 }}
                >
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="social-icon"
                  >
                    <i className={social.icon}></i>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="col-lg-6 text-center mt-5 mt-lg-0"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <img
                src="/download.jpg"
                alt="profile"
                className="img-fluid rounded-circle shadow-lg"
                width="320"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
