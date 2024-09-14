import React, { useState } from "react";

const UserContribution = () => {
  const [selectedForm, setSelectedForm] = useState(null);

  // Determine the URL based on the selected form
  const getIframeSrc = () => {
    switch (selectedForm) {
      case "event":
        return "https://indiawaterportal-demo.madrid.quintype.io/metype?type=event";
      case "article":
        return "https://indiawaterportal-demo.madrid.quintype.io/metype?type=article";
      case "opportunity":
        return "https://indiawaterportal-demo.madrid.quintype.io/metype?type=opportunity";
      default:
        return "";
    }
  };

  return (
    <div>
      <h2>User Contributions</h2>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setSelectedForm("event")} style={buttonStyle}>
          Contribute an Event
        </button>
        <button onClick={() => setSelectedForm("article")} style={buttonStyle}>
          Contribute an Article
        </button>
        <button onClick={() => setSelectedForm("opportunity")} style={buttonStyle}>
          Contribute an Opportunity
        </button>
      </div>
      {selectedForm && (
        <iframe
          src={getIframeSrc()}
          style={{ width: "100%", height: "600px", border: "none" }}
          title="Metype Contribution Form"
        ></iframe>
      )}
    </div>
  );
};

// Inline CSS for buttons
const buttonStyle = {
  marginRight: "10px",
  padding: "10px 20px",
  backgroundColor: "#00796b",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default UserContribution;
