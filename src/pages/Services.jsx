import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

import PageHeader from "../components/PageHeader";
import Service from "../pages/Service";

function Services() {
  const titleStyle = {
    textAlign: "center",
    margin: "20px 0", // Adjust margin as needed
    fontSize: "24px",
    fontWeight: "bold",
    color: "black",
    textTransform: "uppercase",
  };

  return (
    <div>
      <Navbar />
      <PageHeader
        style={{ titleStyle }}
        title="Services"
        path="/services"
        name="Services"
      />
      <Service />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default Services;
