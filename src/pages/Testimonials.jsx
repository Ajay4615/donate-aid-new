import React, { useState, useEffect } from 'react';
import testimonialImage1 from '../assets/test_1.jpg'; // Replace with actual image paths
import testimonialImage2 from '../assets/test_2.jpg'; // Replace with actual image paths
//shop
const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Testimonials</h2>
      <h1 style={styles.header}>What Our Supporters Say</h1>
      <p style={styles.subtitle}>
        Hear from those whose lives have been touched by our mission and the community that supports us.
      </p>
      <div style={{ ...styles.testimonialContainer, flexDirection: isMobile ? 'column' : 'row' }}>
        <div style={{ ...styles.testimonial, minHeight: isMobile ? '300px' : '200px' }}>
          <img src={testimonialImage1} alt="Testimonial 1" style={styles.testimonialImage} />
          <p style={styles.testimonialText}>
            "Thanks to the dedicated efforts of this NGO, my family received the support we desperately needed during
            a difficult time. Their commitment to providing education and healthcare has truly transformed our lives.
            We are forever grateful for their kindness and generosity."
            <br />
            <strong>- Anjali Sharma</strong>
          </p>
        </div>
        <div style={{ ...styles.testimonial, minHeight: isMobile ? '300px' : '200px' }}>
          <img src={testimonialImage2} alt="Testimonial 2" style={styles.testimonialImage} />
          <p style={styles.testimonialText}>
            "Volunteering with this NGO has been one of the most rewarding experiences of my life. Their passion for
            making a difference and their organized approach to community service is inspiring. I am proud to be a part
            of their mission and to contribute to their impactful projects."
            <br />
            <strong>- Raj Patel</strong>
          </p>
        </div>
      </div>
      <button style={styles.button}>Read More Testimonials</button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f8c9a0',
    textAlign: 'center',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    marginBottom: '0.5rem',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1rem',
    marginBottom: '2rem',
  },
  testimonialContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  testimonial: {
    backgroundColor: 'white',
    flex: '1 1 45%',
    minHeight: '300px', // Default height for mobile mode
    margin: '0.5rem',
    boxSizing: 'border-box',
    position: 'relative', // To position the text within the testimonial
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  testimonialImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%', // Makes the image round
    objectFit: 'cover',
    marginBottom: '10px', // Adds space between the image and text
  },
  testimonialText: {
    padding: '10px',
    fontSize: '1rem',
  },
  button: {
    backgroundColor: '#f5811f',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    marginTop: '1rem',
  },
};

export default Testimonials;