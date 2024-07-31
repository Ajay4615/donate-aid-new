import React, { useState, useEffect } from 'react'; 
import volunteerimg from "../assets/become_volunteer.png";

const VolunteerPage = () => {
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

  // Define mobile and desktop styles separately
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: isMobile ? '10px' : '20px',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row', // Image on the left, text on the right for desktop
    alignItems: 'center',
    maxWidth: '1200px',
    width: '100%',
    flexWrap: 'wrap', // Allow wrapping for responsive layout
  };

  const imageContainerStyle = {
    flex: 1,
    textAlign: 'center',
    order: isMobile ? 1 : 0, // Image first on mobile, but placed first for desktop
    marginBottom: isMobile ? '20px' : '0', // Add bottom margin on mobile to separate from text
  };

  const imageStyle = {
    width: '100%',
    maxWidth: isMobile ? '100%' : '300px', // Full width on mobile, fixed size on desktop
    height: 'auto',
  };

  const textContainerStyle = {
    flex: 2,
    padding: isMobile ? '10px' : '20px',
    order: isMobile ? 0 : 1, // Text second on mobile, but placed after image for desktop
  };

  const headerStyle = {
    fontSize: isMobile ? '24px' : '36px',
    color: "#333333",
    fontWeight: "300",
    textAlign: 'center',
    fontStyle: 'italic',
  };

  const subheaderStyle = {
    fontSize: isMobile ? '20px' : '28px',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: '20px',
  };

  const paragraphStyle = {
    fontSize: isMobile ? '16px' : '18px',
    lineHeight: '1.6',
    marginTop: '20px', // Add space between subheader and paragraph
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div style={imageContainerStyle}>
          <img
            src={volunteerimg}
            alt="Volunteer Hands"
            style={imageStyle}
          />
        </div>
        <div style={textContainerStyle}>
          <h2 style={headerStyle}>Become a Volunteer</h2>
          <h3 style={subheaderStyle}>Why We Need You</h3>
          <p style={paragraphStyle}>
            Donor satisfaction is guaranteed. With our assistance, every money donated by the donor is fully utilized to
            assist the recipient through appropriate communication between the two parties, and all procedures are kept
            open and transparent. Donors can rest assured that their contributions are making a direct impact and are
            being managed responsibly. We strive to maintain a high level of accountability and ensure that donors feel
            confident in the effectiveness of their support. We help nonprofits become more effective. We’re quick and
            nimble. We’re truly global. We help companies give well.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPage;
