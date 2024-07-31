import { useNavigate } from "react-router-dom";
import donateAidImage from "../assets/donate-aid-2.jpeg";
import { useState, useEffect } from "react";

export default function Landing() {
  const navigate = useNavigate();

  // State to manage screen width
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Styles
  const containerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    flexWrap: "wrap", // Ensures responsiveness
  };

  const textSectionStyle = {
    flex: 1,
    padding: "10px",
    minWidth: isMobile ? "auto" : "300px", // Ensure text section doesn't get too narrow
  };

  const imageSectionStyle = {
    flex: 1,
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    paddingTop: isMobile ? "0" : "60px",
    display: isMobile ? "none" : "flex", // Hide image on mobile
    justifyContent: "center",
    alignItems: "center",
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
  };

  const sectionStyle = {
    marginBottom: "10px",
  };

  const ulStyle = {
    listStyleType: "disc",
    paddingLeft: "20px",
  };

  return (
    <div style={containerStyle}>
      <div style={textSectionStyle}>
        <div style={sectionStyle}>
          <h3>Our Mission</h3>
          <p>
            Creating a more equitable society through the art of giving and
            awakening collective consciousness of the society towards the needs
            of the deprived and underprivileged. We act as a platform for all
            such people and social organizations who have an urge to do
            something for society.
          </p>
        </div>
        <div style={sectionStyle}>
          <h3>Philosophy</h3>
          <p>
            To create a culture in the social sphere that transfers in-kind,
            resources, and donors to each other in times of need without any
            benefit or selfishness. The goal is to foster a sense of community
            and support among all individuals involved. We strive to act like a
            partner to our NGO and combine traditional values with innovative
            ideas to deliver unparalleled service. Our commitment to excellence
            and dedication to making a positive impact on society drives us to
            constantly improve and adapt.
          </p>
        </div>
        <div style={sectionStyle}>
          <h3>Our Story</h3>
          <p>
            In 2016, Nitin Ghodke established Donate Aid Society to serve as a
            liaison between donors and social organizations. With 25 years of
            experience, he often received significant assistance from donors,
            which he then donated to other charitable causes. He realized that
            many people wanted to support social organizations but didn’t know
            which ones were legitimate. The Donate Aid Society’s exhibition at
            DENE SAMAJACHE was a pivotal moment, providing financial support and
            contact details from numerous donors and volunteers. This exhibition
            helped the organization broaden its network and improve its
            visibility in the community, enabling it to continue its mission of
            helping individuals in need.
          </p>
        </div>

        <div style={sectionStyle}>
          <h3>Become a Volunteer</h3>
          <p>Why We Need You</p>
          <ul style={ulStyle}>
            <li>Donor satisfaction is guaranteed</li>
            <li>We help nonprofits become more effective</li>
            <li>We’re quick and nimble. We’re truly global</li>
            <li>We help companies give well</li>
          </ul>
        </div>
      </div>
      <div style={imageSectionStyle}>
        <img src={donateAidImage} alt="Donate Aid" style={imgStyle} />
      </div>
    </div>
  );
}
