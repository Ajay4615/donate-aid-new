import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const blogs = [
  {
    id: 1,
    title: "Healthy Food Initiative",
    content:
      "Donate grain and healthy food to neighbourhood NGOs, providing resources, equipment, and assistance for growth and sustainability.",
  },
  {
    id: 2,
    title: "Environment and Sustainability",
    content:
      "Support environmental organizations through financial assistance, programs, and training to protect the planet.",
  },
  {
    id: 3,
    title: "Medical Support",
    content:
      "Provide financial, psychiatric, and yoga support for holistic recovery and improved quality of life for those experiencing illness.",
  },
  {
    id: 4,
    title: "शिक्षा",
    content:
      "शैक्षणिक संस्थांना समर्थन देणे, निधी आणि संसाधने प्रदान करणे, समुदायात सकारात्मक बदल घडविणे.",
  },
  {
    id: 5,
    title: "पर्यावरण संरक्षण",
    content:
      "पर्यावरणीय संस्थांना आर्थिक सहाय्य, कार्यक्रम आणि प्रशिक्षण देणे, आणि पर्यावरणाचे संरक्षण करणे.",
  },
  {
    id: 6,
    title: "आहार",
    content:
      "स्थानिक NGO-ना अन्नधान्य आणि आरोग्यदायी खाद्यपदार्थ दान करणे, समुदायातील अन्न सुरक्षेला मदत करणे.",
  },
  {
    id: 7,
    title: "Youth Empowerment",
    content:
      "Initiatives to empower youth through education, skill development, and community engagement.",
  },
  {
    id: 8,
    title: "Women’s Health",
    content:
      "Programs focused on improving women's health through medical support, education, and awareness.",
  },
  {
    id: 9,
    title: "Community Development",
    content:
      "Support for community-driven projects aimed at improving living conditions and local infrastructure.",
  },
  {
    id: 10,
    title: "Disaster Relief",
    content:
      "Providing immediate assistance and long-term support for communities affected by natural and man-made disasters.",
  },
];

const BlogPage = () => {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        backgroundColor: "#f0f2f5", // Light grey background for the entire page
      }}
    >
      <Navbar />
      <PageHeader title="Blog" path="/blog" name="Blogs" />

      <main style={{ padding: "2rem", maxWidth: "1200px", margin: "auto" }}>
        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "center",
          }}
        >
          {blogs.map((blog) => (
            <div
              key={blog.id}
              style={{
                backgroundColor: "#ffffff", // White background for each card
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1.5rem",
                width: "300px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
              }}
              onClick={() => handleReadMore(blog.id)}
            >
              <h2
                style={{
                  margin: "0 0 0.5rem 0",
                  fontSize: "1.25rem",
                  color: "#333",
                }}
              >
                {blog.title}
              </h2>
              <p style={{ margin: 0, color: "#666" }}>{blog.content}</p>
              <button
                onClick={() => handleReadMore(blog.id)}
                style={{
                  marginTop: "1rem",
                  padding: "0.5rem 1rem",
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0056b3")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#007BFF")
                }
              >
                Read More
              </button>
            </div>
          ))}
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default BlogPage;
