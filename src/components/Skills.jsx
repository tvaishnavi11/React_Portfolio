import { motion } from "framer-motion";

const skills = [
  ["JavaScript", "fab fa-js", "text-warning"],
  ["HTML", "fab fa-html5", "text-danger"],
  ["React", "fab fa-react", "text-info"],
  ["Node.js", "fab fa-node-js", "text-success"],
  ["MongoDB", "fas fa-database", "text-warning"],
  ["Bootstrap", "fab fa-bootstrap", "text-primary"],
  ["Tailwind", "fas fa-wind", "text-info"],
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // block time animation
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="skills-section min-vh-100 d-flex align-items-center bg-body-secondary  expand-lg"
    >
      <div className="container position-relative">
        {/* Heading */}
        <motion.h2
          className="text-center fw-bold mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <i className="fas fa-code text-primary me-2"></i> Skills
        </motion.h2>

        {/* Skills Grid */}
        <motion.div
          className="row g-4 justify-content-center text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map(([name, icon, color]) => (
            <motion.div
              key={name}
              className="col-6 col-md-4 col-lg-3"
              variants={cardVariants}
            >
              <motion.div
                className="card h-100 shadow skill-card border-0"
                whileHover={{ scale: 1.08, y: -6 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div className="icon-box mb-3">
                    <i className={`${icon} ${color} fa-3x`}></i>
                  </div>
                  <h6 className="fw-bold">{name}</h6>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
