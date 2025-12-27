import { motion } from "framer-motion";

export const Education = () => {
  return (
    <section
      id="education"
      className="education-section min-vh-100 d-flex align-items-center bg-body-secondary"
    >
      <div className="container">
        {/* Heading */}
        <motion.h2
          className="text-center fw-bold mb-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <i className="fas fa-graduation-cap text-primary me-2"></i> Education
        </motion.h2>

        <motion.p
          className="text-center text-muted mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Education is not the learning of facts, but the training of the mind
          to think.
        </motion.p>

        {/* Cards */}
        <div className="row g-4 justify-content-center">
          {/* College */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="card h-100 shadow edu-card"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="row g-0 align-items-center">
                <div className="col-4 text-center p-3">
                  <img
                    src="/sssca.webp"
                    className="img-fluid rounded edu-img"
                    alt="College"
                  />
                </div>
                <div className="col-8 p-3">
                  <h5 className="fw-bold mb-1">
                    Bachelor of Science (Computer Science)
                  </h5>
                  <p className="mb-1 text-muted">
                    Shri Shivaji Science College, Amravati | SGBAU
                  </p>
                  <span className="badge bg-primary">
                    2022 – 2025 | 8.5 CGPA
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* School */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="card h-100 shadow edu-card"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="row g-0 align-items-center">
                <div className="col-4 text-center p-3">
                  <img
                    src="/grkc.avif"
                    className="img-fluid rounded edu-img"
                    alt="School"
                  />
                </div>
                <div className="col-8 p-3">
                  <h5 className="fw-bold mb-1">HSC – General Science (IP)</h5>
                  <p className="mb-1 text-muted">
                    J.R. Kabra College, Chandur Bazar
                  </p>
                  <span className="badge bg-success">
                    2020 – 2022 | Completed
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
