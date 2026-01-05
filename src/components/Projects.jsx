import { motion } from "framer-motion";

const projects = [
  {
    title: "Modern E-commerce Shop Platform",
    img: "Screenshot (915).png",
    desc: "Full-stack e-commerce platform with cart and authentication.",
    tech: ["React", "JavaScript", "Bootstrap"],
    link: "https://shoping-platform.vercel.app/",
  },

  {
    title: "ParkSmart Management System",
    img: "/parksamrt.png",
    desc: "Park our car as per Location",
    tech: [" React.js, JSON Server ,Tailwind CSS  "],
    link: "https://parkingproject-nu.vercel.app/",
  },

  {
    title: "Slot Booking Management",
    img: "/car.jpg",
    desc: "Smart parking management system using React .",
    tech: ["React", "Maps API", "telwind"],
    link: "https://smart-car-parking-managment-system.vercel.app/",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Projects = () => {
  return (
    <section
      id="projects"
      className="projects-section min-vh-100 d-flex align-items-center bg-body-secondary"
    >
      <div className="container">
        {/* Heading */}
        <motion.h2
          className="text-center fw-bold mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        {/* Grid */}
        <motion.div
          className="row g-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              className="col-12 col-md-6 col-lg-4"
              variants={card}
            >
              <motion.div
                className="card project-card h-100 shadow border-0"
                whileHover={{ y: -10, scale: 1.03 }}
              >
                <div className="project-img-wrapper">
                  <img src={p.img} className="card-img-top" alt={p.title} />
                </div>

                <div className="card-body d-flex flex-column">
                  <h5 className="fw-bold">{p.title}</h5>
                  <p className="text-muted">{p.desc}</p>

                  <div className="mb-3">
                    {p.tech.map((t) => (
                      <span key={t} className="badge bg-primary me-1">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto text-center">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-primary"
                    >
                      <i className="fas fa-eye"></i> View
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
