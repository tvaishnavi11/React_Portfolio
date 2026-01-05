import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const About = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.dataset.count) {
            const target = +entry.target.dataset.count;
            let count = 0;
            const step = Math.ceil(target / 60);

            const update = () => {
              count += step;
              if (count > target) count = target;
              entry.target.innerText = count;
              if (count < target) requestAnimationFrame(update);
            };
            update();
          }
        });
      },
      { threshold: 0.3 }
    );

    countersRef.current.forEach((el) => el && observer.observe(el));
  }, []);

  return (
    <section
      id="about"
      className="about-section d-flex align-items-center py-5 py-lg-6"
    >
      {/* Background */}
      <div className="about-bg position-absolute top-0 start-0 w-100 h-100"></div>

      <div className="container position-relative">
        {/* Heading */}
        <motion.h2
          className="text-center fw-bold mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <i className="fas fa-user text-primary me-2"></i> About Me
        </motion.h2>

        {/* Centered Card */}
        <div className="d-flex justify-content-center">
          <motion.div
            className="about-card card border-0 shadow-lg w-100"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="row g-0 align-items-center">
              {/* IMAGE */}
              <motion.div
                className="col-md-4 text-center p-4 p-lg-5"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="image-glow mx-auto"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                >
                  <img
                    src="/MY OHOTO.png"
                    alt="profile"
                    className="img-fluid rounded-circle about-img"
                    width="200"
                  />
                </motion.div>
              </motion.div>

              {/* CONTENT */}
              <motion.div
                className="col-md-8 p-4 p-lg-5"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h4 className="fw-bold text-gradient mb-3">
                  Full Stack Developer
                </h4>

                <p className="text-muted mb-4">
                  I am a <strong>Full-Stack Developer</strong> based in Pune,
                  India, building modern and scalable web applications using the{" "}
                  <strong>MERN stack</strong>.
                </p>

                {/* STATS */}
                <div className="row text-center g-4 mb-4">
                  {[
                    ["Projects", 5],
                    ["Technologies", 10],
                  ].map(([label, value], i) => (
                    <div className="col-4" key={label}>
                      <h3
                        className="fw-bold text-primary"
                        data-count={value}
                        ref={(el) => (countersRef.current[i] = el)}
                      >
                        0
                      </h3>
                      <p className="small text-muted mb-0">{label}</p>
                    </div>
                  ))}
                </div>

                {/* CONTACT */}
                <div className="mb-4">
                  <p className="mb-1">
                    <i className="fas fa-envelope me-2 text-primary"></i>
                    tvaishnavi212@gmail.com
                  </p>
                  <p className="mb-0">
                    <i className="fas fa-location-dot me-2 text-primary"></i>
                    Pune, India
                  </p>
                </div>

                {/* CV */}
                <motion.a
                  href="public\VT.pdf"
                  download
                  className="btn btn-primary px-4 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-download me-2"></i> Download Resume
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
