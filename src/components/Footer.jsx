import "../css/footer.css";
import logo from "../assets/logo_1.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-newsletter">
              <img
                src={logo}
                alt="Footer Image"
                style={{ width: "80%", height: "auto", marginBottom: "20px" }} // Adjusted size
              />
              <p style={{ marginBottom: "20px" }}> {/* Added marginBottom */}
                We’re curious, passionate, and committed to helping nonprofits learn and grow. Donate now!
              </p>
              <button
                className="btn btn-custom"
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  padding: "10px 0", // Added padding for better spacing
                  marginBottom: "20px", // Added marginBottom
                }}
              >
                Donate Now <i className="fa fa-heart" style={{ marginLeft: "13px" }}></i>
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-contact">
              <h2>Contact Us</h2>
              <a
                href="https://maps.app.goo.gl/n6pLfQhKRoJhXwAo6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p style={{ marginBottom: '10px' }}> {/* Add space below */}
                  <i className="fa fa-map-marker-alt"></i>Flat No 104, 1st Floor, Kalyani Heritage, Mohan Nagar, Baner, Tal Haveli, 411045
                </p>
              </a>
              <a href="tel:+91-7385223242">
                <p style={{ marginBottom: '10px' }}> {/* Add space below */}
                  <i className="fa fa-phone"></i>+91 9518541719
                </p>
              </a>
              <a href="mailto:sanjivani.vitswd@vit.edu">
                <p style={{ marginBottom: '10px' }}> {/* Add space below */}
                  <i className="fa fa-envelope"></i>donateaidsociety@gmail.com
                </p>
              </a>
              <div className="footer-social">
                <a
                  className="btn btn-custom"
                  href="https://twitter.com/vit_socials"
                >
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a
                  className="btn btn-custom"
                  href="https://www.facebook.com/vitsocials"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-custom"
                  href="https://www.instagram.com/vitsocials/"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="btn btn-custom"
                  href="https://www.youtube.com/channel/UCJnaNm8Ns08rUIhsdFM2fhA"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  className="btn btn-custom"
                  href="https://www.linkedin.com/company/vit-social-welfare-development/"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-link">
              <h2>Nonprofits</h2>
              <a href="/about">Nonprofit Resources</a>
              <a href="/contact">Corporate Giving Resources</a>
              <a href="/event">Corporate Gift Cards</a>
              <a href="/event">CSR Made Simple</a>
              <a href="#">Start an Application</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-link">
              <h2>Donors</h2>
              <a href="#">Nonprofit Resources</a>
              <a href="#">Corporate Giving Resources</a>
              <a href="#">Corporate Gift Cards</a>
              <a href="#">CSR Made Simple</a>
              <a href="#">Start an Application</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container copyright">
        <div className="row">
          <div className="col-md-6">
            <p>
              &copy; <a href="#">The Donate Aid Society</a> | 2024, All Right
              Reserved.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Designed By{" "}
              <a href="https://www.linkedin.com/in/bhavesh-patil-92b7aa22a">
                Nirman tech solution
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
