import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo_1.png";

export default function Navbar() {
  const [auth, setAuth] = useState("");
  const [logoStyle, setLogoStyle] = useState({});
  const [hoveredLink, setHoveredLink] = useState("");
  const path = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    // Set authentication state
    const isAdmin = localStorage.getItem("ADMIN_NGO");
    const isUser = localStorage.getItem("NGO");
    if (isAdmin) {
      setAuth("ADMIN");
    } else if (isUser) {
      setAuth("USER");
    }

    // Handle sticky navbar
    const topBar = document.querySelector(".top-bar");
    const navbar = document.querySelector(".navbar");

    function toggleStickyNavbar() {
      if (topBar && navbar) {
        if (window.scrollY > topBar.offsetHeight) {
          navbar.classList.add("nav-sticky");
          topBar.classList.add("hide-top-bar");
        } else {
          navbar.classList.remove("nav-sticky");
          topBar.classList.remove("hide-top-bar");
        }
      }
    }

    window.addEventListener("scroll", toggleStickyNavbar);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on mount

    // Handle responsive logo style
    function updateLogoStyle() {
      if (window.innerWidth < 768) {
        setLogoStyle({
          height: "60px",
          width: "auto",
          maxWidth: "150px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
        });
      } else {
        setLogoStyle({
          height: "60px",
          width: "auto",
          maxWidth: "180px",
          marginLeft: "140px",
        });
      }
    }

    updateLogoStyle(); // Set initial style
    window.addEventListener("resize", updateLogoStyle);

    // Clean up listeners on component unmount
    return () => {
      window.removeEventListener("scroll", toggleStickyNavbar);
      window.removeEventListener("resize", updateLogoStyle);
    };
  }, []);

  const navLinkStyle = (isActive, isHovered) => ({
    color: isHovered ? "darkorange" : isActive ? "darkorange" : "orange",
    fontSize: "22px",
    marginRight: "20px",
    transition: "color 0.3s ease-in-out", // Smooth color transition
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <>
      {/* <!-- Nav Bar Start --> */}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white"
        style={{ marginTop: "0" }}
      >
        <div className="container-fluid d-flex align-items-center">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" style={logoStyle} />
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ml-auto">
              {[
                { to: "/", text: "Home" },
                { to: "/about", text: "About Us" },
                { to: "/pages/shop", text: "Shops" },
                { to: "/pages/services", text: "Services" },
                { to: "/blog", text: "Blogs" },
                { to: "/contact", text: "Contact Us" },
              ].map(({ to, text }) => (
                <Link
                  key={to}
                  to={to}
                  className={`nav-item nav-link ${path === to ? "active" : ""}`}
                  onMouseEnter={() => setHoveredLink(to)}
                  onMouseLeave={() => setHoveredLink("")}
                  style={navLinkStyle(path === to, hoveredLink === to)}
                >
                  {text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- Nav Bar End --> */}
    </>
  );
}
