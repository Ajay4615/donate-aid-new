import { useState, useEffect } from "react";

// Sample card data
const cardData = [
  {
    id: 1,
    name: "John Doe",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.7b7FFC2ANLuE-PH0Ged66wHaE8&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    name: "Jane Smith",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.7b7FFC2ANLuE-PH0Ged66wHaE8&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    name: "Alice Johnson",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.7b7FFC2ANLuE-PH0Ged66wHaE8&pid=Api&P=0&h=180",
  },
  {
    id: 4,
    name: "Bob Brown",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.7b7FFC2ANLuE-PH0Ged66wHaE8&pid=Api&P=0&h=180",
  },
];

export default function Events() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Styles
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "10px",
  };

  const cardStyle = {
    width: isMobile ? "100%" : "45%", // Full width on mobile, 45% on desktop
    margin: "10px 0",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center", // Center align text inside card
  };

  const imgStyle = {
    width: "100px", // Medium width
    height: "100px", // Medium height
    objectFit: "cover", // Ensure the image covers the specified dimensions
    borderRadius: "50%", // Optional: make the image circular
    margin: "10px auto", // Center the image horizontally with some top and bottom margin
  };

  const nameStyle = {
    padding: "10px",
  };

  const titleStyle = {
    textAlign: "center",
    margin: "20px 0", // Adjust margin as needed
    fontSize: "24px",
    fontWeight: "bold",
    color: "black",
    textTransform: "uppercase",
  };

  return (
    <>
      <div style={titleStyle}>Our Team</div>
      <div style={containerStyle}>
        {cardData.map((card) => (
          <div key={card.id} style={cardStyle}>
            <img src={card.image} alt={card.name} style={imgStyle} />
            <div style={nameStyle}>{card.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
