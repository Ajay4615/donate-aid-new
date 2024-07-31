import React from "react";

function VolunteerOpportunities() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "20px",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          transition: "0.3s",
          borderRadius: "10px",
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <h1 style={{ fontSize: "2em", marginBottom: "20px" }}>
          Volunteer Opportunities
        </h1>
        <p style={{ fontSize: "1em", lineHeight: "1.6", color: "#555" }}>
          Detailed information about Volunteer Opportunities: We provide various
          opportunities for individuals to volunteer their time and skills to
          support our causes. Volunteers play a crucial role in helping us
          achieve our mission.
        </p>
      </div>
    </div>
  );
}

export default VolunteerOpportunities;
