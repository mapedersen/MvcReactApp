import React from "react";
import ReactDOM from "react-dom/client";

// Simple React components
const StaffSettings = () => <h2>🚀 Welcome Screen Loaded!</h2>;
const PrivacyPolicy = () => <h2>🚀 Privacy Policy Loaded!</h2>;

// Find the div elements
const mountPoint = document.getElementById("react-staffsettings");
const mountPoint2 = document.getElementById("react-privacypolicy");

if (mountPoint) {
  ReactDOM.createRoot(mountPoint).render(<StaffSettings />);
}

if (mountPoint2) {
  ReactDOM.createRoot(mountPoint2).render(<PrivacyPolicy />);
}
