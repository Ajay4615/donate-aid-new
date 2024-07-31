import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import banner from "../assets/banner.jpeg";
import "../css/home.css"; // Keep if you still use other styles
import Initiatives from "../components/Initiatives";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Landing from "../components/Landing";
import Funds from "../components/Funds";
import BackToTop from "../components/BackToTop"; 
import About from "../pages/About"; 
import Testimonials from "./Testimonials"; 
import Volunteer from "./Volunteer";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Styles based on window width
  const containerStyle = {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: windowWidth < 768 ? "300px" : "500px", // Adjust height for mobile
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: "0.6", // Adjust opacity for background image
  };

  const textContainerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "black", // Text color for better contrast on a white background
    textAlign: "center",
    padding: windowWidth < 768 ? "10px" : "20px", // Adjust padding for mobile
    // background: "rgba(255, 255, 255, 0.8)", // White background with opacity for text container
    borderRadius: "8px",
    maxWidth: "90%", // Ensure text fits within the container
    // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Optional: Add shadow for a card-like effect
  };

  const textStyle = {
    fontSize: windowWidth < 768 ? "1.2rem" : "1.5rem", // Adjust font size for mobile
    lineHeight: "1.2",
    margin: 0,
  };

  const headingStyle = {
    fontSize: windowWidth < 768 ? "24px" : "52px", // Adjust font size for mobile
    color: "orange",
    margin: windowWidth < 768 ? "8px 0" : "16px 0", // Adjust margin for mobile
  };

  const buttonStyle = {
    display: "inline-block",
    backgroundColor: "orange",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: windowWidth < 768 ? "8px 16px" : "10px 20px", // Adjust padding for mobile
    fontSize: windowWidth < 768 ? "0.9rem" : "1rem", // Adjust font size for mobile
    cursor: "pointer",
    textAlign: "center",
    marginTop: windowWidth < 768 ? "16px" : "32px", // Margin from the text above
  };

  return (
    <>
      <Navbar />
      <div style={containerStyle}>
        <img src={banner} alt="banner" style={imageStyle} />
        <div style={textContainerStyle}>
          <h2 style={textStyle}>
            <div
              style={{
                textAlign: "center",
                marginTop: windowWidth < 768 ? "16px" : "32px",
              }}
            >
              Small Help Can Make Changes
            </div>
            <div style={headingStyle}>
              New Hope For
              <br />
              <div style={{ marginRight: "12px" }}>New Future</div>
            </div>
            <div style={{ marginTop: windowWidth < 768 ? "5px" : "7px" }}>
              Your Small Contributions Mean A Lot
            </div>
          </h2>
          <button style={buttonStyle}>Donate Now</button>
        </div>
      </div>
      {/* Uncomment the sections you want to include */}
      {/* <Landing />
      <Initiatives />
      <Funds />
      <ContactForm />
      <Footer />
      <BackToTop /> */} 
      <About/> 
      <Volunteer/> 
      <Testimonials/> 
      <Footer/>
    </>
  );
}
