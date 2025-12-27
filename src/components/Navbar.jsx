import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("light");

  // Handle scroll effect for a "floating" feel
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.dataset.bsTheme = newTheme;
  };

  // Animation Variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={navVariants}>
      <Navbar
        expand="lg"
        fixed="top"
        className={`transition-all duration-300 ${
          scrolled
            ? "py-2 shadow-lg bg-body-tertiary blur-bg"
            : "py-3 bg-transparent"
        }`}
      >
        <Container>
          <motion.a
            className="navbar-brand fw-bold"
            href="#home"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-user-astronaut me-2 text-primary"></i>{" "}
            V@!SHN@V!
          </motion.a>

          <Navbar.Toggle aria-controls="nav-collapse" />

          <Navbar.Collapse id="nav-collapse">
            <Nav className="ms-auto gap-2 align-items-center">
              {[
                "home",
                "about",
                "skills",
                "education",
                "projects",
                "contact",
              ].map((item) => (
                <motion.div key={item} variants={itemVariants}>
                  <Nav.Link
                    href={`#${item}`}
                    className="text-capitalize px-3 hover-underline"
                  >
                    {item}
                  </Nav.Link>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} whileTap={{ rotate: 180 }}>
                <Button
                  variant={theme === "light" ? "outline-dark" : "outline-info"}
                  onClick={toggleTheme}
                  className="rounded-circle ms-lg-3 shadow-sm"
                  style={{ width: "40px", height: "40px", padding: 0 }}
                >
                  {theme === "light" ? "🌙" : "☀️"}
                </Button>
              </motion.div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Navigation;
