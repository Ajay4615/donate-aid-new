import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDroplet,
  faGift,
  faWallet,
  faUser,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Card = ({ icon, title, description, link }) => (
  <div
    style={{
      backgroundColor: "#ffffff",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "1rem",
      width: "300px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      textAlign: "center",
    }}
  >
    <FontAwesomeIcon icon={icon} size="3x" style={{ marginBottom: "1rem" }} />
    <h2 style={{ margin: "0 0 1rem" }}>{title}</h2>
    <p style={{ margin: "0 0 1rem" }}>{description}</p>
    <Link to={link}>
      <button
        style={{
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "0.5rem 1rem",
          cursor: "pointer",
        }}
      >
        Read More
      </button>
    </Link>
  </div>
);

const ServicePage = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        backgroundColor: "#f4f4f4",
        display: "flex",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <main
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "center",
          }}
        >
          <Card
            icon={faHandHoldingDroplet}
            title="Charity Support"
            description="Donate Aid helps with choosing funds, ensuring donor satisfaction, and assisting companies in charitable giving."
            link="/charity-support"
          />
          <Card
            icon={faUtensils}
            title="Food & Water Charity"
            description="They operate globally, connecting nonprofits, donors, and companies to support food and water needs."
            link="/food-water-charity"
          />
          <Card
            icon={faUser}
            title="Volunteer Opportunities"
            description="They offer opportunities for people to volunteer and contribute to their causes."
            link="/volunteer-opportunities"
          />
          <Card
            icon={faGift}
            title="Gifts for Children"
            description="They facilitate sending gifts to children, supporting their well-being and happiness."
            link="/gifts-for-children"
          />
          <Card
            icon={faWallet}
            title="Fund Assistance"
            description="They provide assistance to foundations and help people through various charitable activities. They use donations to create savings funds and support individuals in need."
            link="/fund-assistance"
          />
        </section>
      </main>
    </div>
  );
};

export default ServicePage;
