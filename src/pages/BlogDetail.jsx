import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const blogs = [
  {
    id: 1,
    title: "Healthy Food Initiative",
    content:
      "Donate grain and healthy food to neighborhood NGOs, providing resources, equipment,  and assistance for  growth and sustainability. This initiative aims to combat hunger and malnutrition in vulnerable communities by ensuring access to nutritious food. By supporting local NGOs, we empower them to reach more people in need, offering balanced meals that contribute to overall health and well-being.",
  },
  {
    id: 2,
    title: "Environment and Sustainability",
    content:
      "Support environmental organizations through financial assistance, programs, and training to protect the planet. Our initiative funds projects that focus on conservation, renewable energy, and pollution reduction, fostering a sustainable future. We also provide educational resources and hands-on training to empower communities to engage in eco-friendly practices and advocate for environmental stewardship",
  },
  {
    id: 3,
    title: "Medical Support",
    content:
      "Provide financial, psychiatric, and yoga support for holistic recovery and improved quality of life for those experiencing illness. Our comprehensive approach ensures that individuals receive not only the necessary medical treatments but also the emotional and mental health support crucial for full recovery. By incorporating yoga and mindfulness practices, we aim to reduce stress and promote physical well-being. We also offer counseling services and support groups to help patients and their families navigate the challenges of illness, fostering a community of care and resilience. ",
  },
  {
    id: 4,
    title: "शिक्षा",
    content:
      "शैक्षणिक संस्थांना समर्थन देणे, निधी आणि संसाधने प्रदान करणे, समुदायात सकारात्मक बदल घडविणे. आमचा उपक्रम विद्यार्थ्यांना आधुनिक तंत्रज्ञान आणि उच्च-गुणवत्तेच्या शैक्षणिक साधनांसाठी प्रवेश मिळवून देतो. शिक्षकांना प्रशिक्षण कार्यक्रमाद्वारे त्यांच्या अध्यापन कौशल्यांचा विकास करण्यात मदत करणे. तसेच, शाळा आणि महाविद्यालयांना शैक्षणिक साहित्य आणि पायाभूत सुविधा उभारण्यासाठी आर्थिक सहाय्य पुरवून त्यांच्या सर्वांगीण विकासासाठी कार्य करणे.",
  },
  {
    id: 5,
    title: "पर्यावरण संरक्षण",
    content:
      "पर्यावरणीय संस्थांना आर्थिक सहाय्य, कार्यक्रम आणि प्रशिक्षण देणे, आणि पर्यावरणाचे संरक्षण करणे. आम्ही वृक्षारोपण मोहिमा, स्वच्छता अभियान आणि जैवविविधता संवर्धन प्रकल्पांचे आयोजन करतो. स्थानिक समुदायांना पर्यावरणाच्या संरक्षणाचे महत्त्व पटवून देण्यासाठी जनजागृती कार्यक्रम आणि कार्यशाळा आयोजित करतो. तसेच, पर्यावरणीय धोरणे आणि नियमांचे पालन करण्यासाठी संस्थांना तांत्रिक आणि आर्थिक सहाय्य पुरवतो.",
  },
  {
    id: 6,
    title: "आहार",
    content:
      "स्थानिक NGO-ना अन्नधान्य आणि आरोग्यदायी खाद्यपदार्थ दान करणे, समुदायातील अन्न सुरक्षेला मदत करणे. आमचा उपक्रम गरीब आणि गरजू कुटुंबांना पौष्टिक आहार उपलब्ध करून देतो, ज्यामुळे त्यांचे आरोग्य सुधारते. आम्ही शाळांमध्ये आणि बालगृहांमध्ये मोफत आहार योजना राबवतो, ज्यामुळे विद्यार्थ्यांना सकस आहार मिळतो आणि त्यांच्या शैक्षणिक प्रगतीला चालना मिळते. तसेच, अन्न सुरक्षेसाठी शाश्वत शेती आणि अन्न व्यवस्थापनाचे तंत्रज्ञान प्रशिक्षण प्रदान करून स्थानिक कृषी संस्थांना समर्थन देतो.",
  },
  {
    id: 7,
    title: "Youth Empowerment",
    content:
      "Initiatives to empower youth through education, skill development, and community engagement. We offer scholarships and educational programs to ensure access to quality education for underprivileged youth. Our skill development workshops focus on vocational training, digital literacy, and entrepreneurship, preparing young people for the job market. Additionally, we organize community service projects and leadership training to foster civic responsibility and encourage active participation in community development.",
  },
  {
    id: 8,
    title: "Women’s Health",
    content:
      "Programs focused on improving women's health through medical support, education, and awareness. We provide access to essential healthcare services, including maternal and reproductive health care, to ensure women's well-being. Our educational initiatives cover nutrition, hygiene, and disease prevention, empowering women with knowledge to make informed health decisions. Additionally, we conduct awareness campaigns and workshops to address health issues such as breast cancer and mental health, promoting early detection and intervention.",
  },
  {
    id: 9,
    title: "Community Development",
    content:
      "Support for community-driven projects aimed at improving living conditions and local infrastructure. We invest in initiatives such as building and renovating community centers, enhancing access to clean water, and upgrading local roads and public spaces. Our approach includes collaborating with local leaders and residents to identify needs, ensuring that projects are tailored to the specific requirements of the community.",
  },
  {
    id: 10,
    title: "Disaster Relief",
    content:
      "Providing immediate assistance and long-term support for communities affected by natural and man-made disasters. We deliver emergency supplies such as food, water, and medical aid to affected areas and set up temporary shelters to ensure safety and basic needs are met. In the aftermath, we focus on rebuilding infrastructure, supporting recovery efforts, and offering psychological counseling to help communities restore normalcy. ",
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      <Navbar />
      <PageHeader
        title={blog.title}
        path={`/blog/${blog.id}`}
        name="Blog Detail"
      />

      <main style={{ padding: "1rem" }}>
        <section
          style={{
            backgroundColor: "#f9f9f9",
            border: "1px solid #ddd",
            borderRadius: "5px",
            padding: "1rem",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default BlogDetail;
