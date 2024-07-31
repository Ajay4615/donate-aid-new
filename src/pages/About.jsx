import React from "react";
import about1 from "../assets/about_1.png";
import about2 from "../assets/about_2.png";
import about3 from "../assets/about_3.png";
import about4 from "../assets/about_4.png";
import about5 from "../assets/about_5.png";

const data = [
  {
    imageSrc: about1,
    header: "Healthy Food",
    description:
      "Donate grain and healthy food to neighbourhood NGOs, providing resources, equipment, and assistance for growth and sustainability. Partnering with these organizations can significantly impact food insecurity in our community and beyond.",
  },
  {
    imageSrc: about2,
    header: "Environment and Sustainability",
    description:
      "We aim to support environmental organizations through financial assistance, programs, and training, empowering them to make a meaningful impact on protecting the planet through resources and expertise.",
  },
  {
    imageSrc: about3,
    header: "Medical",
    description:
      "Our aim is to provide financial, psychiatric, and yoga support to individuals experiencing illness, promoting holistic recovery, and improving their quality of life by addressing all aspects of their well-being.",
  },
  {
    imageSrc: about4,
    header: "Education",
    description:
      "We support education organizations promoting positive change by providing funding and resources, aiming to create a ripple effect in communities and empower individuals through education.",
  },
  {
    imageSrc: about5,
    header: "Helping Today. Helping Tomorrow",
    description:
      "Donate Aid Society is the largest global crowdfunding community connecting nonprofits, donors, and companies in India. We help nonprofits from India access the tools, training, and support they need to be more effective and make our world a better place.",
  },
];

const MyComponent = () => (
  <div>
    <style>
      {`
        .flex-container {
          display: flex;
          align-items: center;
          margin-top: 20px;
          margin-bottom: 20px;
          flex-direction: row;
          width: 100%;
          max-width: 1200px; /* Adjust max width for desktop */
          margin: 0 auto; /* Center the container */
          overflow-x: hidden; /* Prevent horizontal scrolling */
        }

        .image-section,
        .text-section {
          flex: 1; 
        }
       
        .image-section {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-section img {
          width: 100%; /* Make image width 100% of its container */
          height: auto; /* Auto height to maintain aspect ratio */
          max-height: 370px; /* Limit height */
          object-fit: cover;
        }
        
        @media (max-width: 768px) {
          .flex-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
            max-width: 100%; /* Ensure full width on mobile */
            margin: 0; /* Remove margins on mobile */
          }
          .image-section,
          .text-section {
            width: 100%;
            margin: 0;
          }
          .text-section h2 {
            font-size: 18px; /* Font size for mobile */
          }
          .text-section p {
            font-size: 14px; /* Font size for mobile */
          }
        }

        .text-section {
          margin-bottom: 56px; /* Margin bottom for desktop */
        }

        .text-section h2 {
          font-size: 24px; /* Font size for desktop */
          margin-bottom: 4px; /* Add 4 pixel margin */
          font-weight: bold; /* Make headers bold */
        }

        .text-section p {
          margin-top: 4px; /* Add 4 pixel margin */
          font-size: 16px; /* Default font size for mobile */
        }

        @media (min-width: 769px) {
          .text-section p {
            font-size: 18px; /* Increased font size for desktop */
          }
        }

        .learn-more-container {
          display: flex;
          justify-content: center;
          margin-top: 24px;
        }

        .learn-more-btn {
          padding: 8px 16px; /* Adjusted padding for smaller width */
          width: 150px; /* Set a specific width */
          background-color: orange;
          color: white;
          border: none;
          border-radius: 5px;
          text-align: center;
          text-decoration: none;
          font-size: 16px; 
        }

        .learn-more-btn:hover {
          background-color: darkorange;
        }

        /* Special style for the specific header */
        .special-header {
          color: black !important; /* Ensure black color for specific header */
        }

        /* Default color for other headers */
        .default-header {
          color: orange; /* Orange color for default headers */
        }
      `}
    </style>

    <div
      style={{
        fontSize: "24px",
        fontWeight: "bold",
        marginTop: "20px",
        textAlign: "center",
        marginBottom: "20px", // Add margin-bottom to the header
      }}
    >
      Connects Nonprofits, Donors, & Companies in India!
    </div>

    {/* Flex Containers for Dynamic Sections */}
    {data.map((item, index) => (
      <div
        key={index}
        className="flex-container"
        style={{
          flexDirection: index % 2 === 0 ? "row" : "row-reverse", // Alternate direction
        }}
      >
        {/* Image Section */}
        <div className="image-section">
          <img
            src={item.imageSrc} // Use the image source from the array
            alt={`Description ${index + 1}`}
          />
        </div>

        {/* Text Section */}
        <div
          className="text-section"
          style={{
            marginLeft: index % 2 === 0 ? "20px" : "0",
            marginRight: index % 2 === 0 ? "0" : "20px",
          }}
        >
          <h2
            className={
              item.header === "Helping Today. Helping Tomorrow"
                ? "special-header"
                : "default-header"
            }
            style={{
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {item.header}
          </h2>
          <p>{item.description}</p>
          {/* Conditional Rendering for "Learn More" Button */}
          {index === 4 && (
            <div className="learn-more-container">
              <a href="#" className="learn-more-btn">
                Learn More
              </a>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default MyComponent;
