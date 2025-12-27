const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-body-secondary position-relative">
      <div className="container">
        {/* Heading */}
        <h2 className="text-center fw-bold mb-2 fade-up">
          <i className="fas fa-headset text-primary"></i> Get in{" "}
          <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted mb-5 fade-up delay-1">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

        <div className="row align-items-center g-5 justify-content-center">
          {/* Image */}
          <div className="col-lg-5 text-center fade-up delay-2">
            <img
              src="\contact.jpg"
              alt="contact"
              className="img-fluid contact-img"
            />
          </div>

          {/* Form */}
          <div className="col-lg-6 fade-up delay-3">
            <form className="card shadow-lg border-0 p-4 contact-card">
              <div className="row g-3">
                {/* Name */}
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                    <label>
                      <i className="fas fa-user me-2"></i>Name
                    </label>
                  </div>
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                    <label>
                      <i className="fas fa-envelope me-2"></i>Email
                    </label>
                  </div>
                </div>

                {/* Phone */}
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                    />
                    <label>
                      <i className="fas fa-phone me-2"></i>Phone
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      style={{ height: "120px" }}
                      required
                    ></textarea>
                    <label>
                      <i className="fas fa-comment-dots me-2"></i>Message
                    </label>
                  </div>
                </div>

                {/* Button */}
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 send-btn"
                  >
                    Submit <i className="fa fa-paper-plane ms-2"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
