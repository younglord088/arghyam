import React, { useState, useEffect } from "react";

const UserContribution = () => {
  const [selectedForm, setSelectedForm] = useState(null);

  // Function to load Metype widget
  const loadMetypeScript = () => {
    if (!window.talktype) {
      // Load the Metype script
      const script = document.createElement("script");
      script.src = "https://www.metype.com/quintype-metype/assets/metype.js";
      script.async = true;
      script.onload = () => {
        console.log("Metype script loaded successfully");
        // Now check if talktype is defined
        if (window.talktype) {
          updateUGCTopic(selectedForm); // Ensure the widget is loaded once the script is ready
        } else {
          console.error("talktype is still not available after script load");
        }
      };
      document.body.appendChild(script);
    } else {
      // If the script is already loaded, just call the update function
      updateUGCTopic(selectedForm);
    }
  };

  // Function to update UGC topic based on selected form type
  const updateUGCTopic = (formType) => {
    let topicValue = "";
    switch (formType) {
      case "event":
        topicValue = "event";
        break;
      case "article":
        topicValue = "article";
        break;
      case "opportunity":
        topicValue = "opportunity";
        break;
      default:
        topicValue = "";
    }

    if (window.talktype) {
      window.talktype(function () {
        window.talktype.updateUGCTopic({
          topicType: "story-attributes.ugcTopic",
          topicValue: topicValue,
        });
        // Render the contribution widget iframe
        window.talktype.contributionWidgetIframe(
          document.getElementById("contribution-container")
        );
      });
    } else {
      console.error("talktype is not available after script load");
    }
  };

  // Effect to load Metype script when the component mounts or when form changes
  useEffect(() => {
    if (selectedForm) {
      loadMetypeScript();
    }
  }, [selectedForm]);

  // Render the selected form
  const renderForm = () => {
    if (selectedForm === "event") {
      return (
        <div>
          <h3>Contribute an Event</h3>
          <div
            id="contribution-container"
            data-metype-account-id="1003992"
            data-metype-host="https://www.metype.com/"
          ></div>
        </div>
      );
    } else if (selectedForm === "article") {
      return (
        <div>
          <h3>Contribute an Article</h3>
          <div
            id="contribution-container"
            data-metype-account-id="1003992"
            data-metype-host="https://www.metype.com/"
          ></div>
        </div>
      );
    } else if (selectedForm === "opportunity") {
      return (
        <div>
          <h3>Contribute an Opportunity</h3>
          <div
            id="contribution-container"
            data-metype-account-id="1003992"
            data-metype-host="https://www.metype.com/"
          ></div>
        </div>
      );
    } else {
      return null;
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
      {renderForm()}
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
