import React, { useState } from "react";

function VolunteerRegistration() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    availability: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log("Form Data Submitted:", formData);
  };

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
          backgroundColor: "#fff",
        }}
      >
        <h1 style={{ fontSize: "2em", marginBottom: "20px" }}>
          Volunteer Registration
        </h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="name"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                fontSize: "1em",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="email"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                fontSize: "1em",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="phone"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                fontSize: "1em",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="availability"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Availability
            </label>
            <select
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                fontSize: "1em",
              }}
            >
              <option value="" disabled>
                Select your availability
              </option>
              <option value="Weekdays">Weekdays</option>
              <option value="Weekends">Weekends</option>
              <option value="Anytime">Anytime</option>
            </select>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="message"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                fontSize: "1em",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#4CAF50",
              color: "#fff",
              fontSize: "1em",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default VolunteerRegistration;
