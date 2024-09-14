import React, { useEffect, useState } from "react";

const Use = () => {
  const [userData, setUserData] = useState(null);

  // Function to fetch user data
  const fetchUserData = async () => {
    // Dummy data in case the API call fails
    const dummyData = {
      user: {
        id: 7847602,
        name: "Yash Panjwani",
        email: "yashmpanjwani@gmail.com",
        username: "yashmpanjwani",
        verificationStatus: "Verified",
      },
      activeSessionsCount: 2,
      source: "India Water Portal",
    };
    setUserData(dummyData);
  };

  // Fetch user data on component mount
  useEffect(() => {
    fetchUserData();
  }, []);

  // Inline CSS for the page
  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#e0f7fa", // Light water-themed background
    fontFamily: "'Roboto', sans-serif",
  };

  const cardStyle = {
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "15px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    width: "350px",
    textAlign: "center",
    border: "1px solid #0288d1", // Blue border to reflect water theme
  };

  const headingStyle = {
    fontSize: "26px",
    marginBottom: "20px",
    color: "#0288d1", // Water blue color
  };

  const textStyle = {
    fontSize: "18px",
    marginBottom: "12px",
    color: "#00796b", // Green for a nature-themed look
  };

  const sessionStyle = {
    fontSize: "16px",
    color: "#00796b", // Green for consistent design
  };

  const profileImageStyle = {
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    marginBottom: "20px",
    border: "2px solid #0288d1", // Blue border for the profile image
  };

  // Display loading while data is being fetched
  if (!userData) {
    return <div style={pageStyle}>Loading...</div>;
  }

  // Destructure data from the API response
  const { user, activeSessionsCount, source } = userData;

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        {/* User Avatar */}
        <img
          src="https://via.placeholder.com/80" // Placeholder image
          alt="User Avatar"
          style={profileImageStyle}
        />
        <h2 style={headingStyle}>User Profile</h2>
        <p style={textStyle}>
          <strong>ID:</strong> {user.id}
        </p>
        <p style={textStyle}>
          <strong>Name:</strong> {user.name || "Not provided"}
        </p>
        <p style={textStyle}>
          <strong>Email:</strong> {user.email}
        </p>
        <p style={textStyle}>
          <strong>Username:</strong> {user.username}
        </p>
        <p style={textStyle}>
          <strong>Verification Status:</strong> {user.verificationStatus}
        </p>
        <p style={textStyle}>
          <strong>Active Sessions:</strong> {activeSessionsCount}
        </p>
        <p style={sessionStyle}>
          <strong>Source:</strong> {source}
        </p>
      </div>
    </div>
  );
};

export default Use;
