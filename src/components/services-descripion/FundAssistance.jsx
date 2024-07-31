import React from "react";

function FundAssistance() {
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
          Fund Assistance
        </h1>
        <p style={{ fontSize: "1em", lineHeight: "1.6", color: "#555" }}>
          Detailed information about Fund Assistance: We assist foundations and
          individuals through various charitable activities. Your donations help
          create savings funds and provide essential support to those in need,
          ensuring financial stability and assistance.
        </p>
      </div>
    </div>
  );
}

export default FundAssistance;
