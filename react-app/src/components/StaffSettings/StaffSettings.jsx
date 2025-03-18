import React from "react";
import StaffForm from "./modules/StaffForm";
import StaffList from "./modules/StaffList";

const StaffSettings = () => {
  return (
    <div className="staff-container">
      <h2>Staff Settings</h2>
      <StaffList />
      <StaffForm />
    </div>
  );
};

export default StaffSettings;
