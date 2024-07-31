import React from "react";

function GiftsForChildren() {
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
          Gifts for Children
        </h1>
        <p style={{ fontSize: "1em", lineHeight: "1.6", color: "#555" }}>
          Detailed information about Gifts for Children: Our program facilitates
          the delivery of gifts to children in need, bringing joy and happiness
          to their lives. We focus on supporting the well-being of children
          through thoughtful gift-giving.
        </p>
      </div>
    </div>
  );
}

export default GiftsForChildren;
