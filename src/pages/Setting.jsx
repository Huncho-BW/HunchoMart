import React, { useContext } from "react";
import { AuthenticatonContext } from "../context/AuthenticatonContext";

export default function Settings() {
  const { details } = useContext(AuthenticatonContext);

  const personalInfo = [
    {
      name: "Fullname",
      value: `${details?.firstName} ${details?.lastName}`,
    },
    {
      name: "Email",
      value: details?.email,
    },
  ];

  const preference = [
    {
      name: "Currency",
      value: "NGN",
    },
    {
      name: "Language",
      value: "English",
    },
  ];

  const privacy = [
    {
      name: "Data sharing",
      value: "Limited",
    },
    {
      name: "Personalized ads",
      value: "None",
    },
  ];

  const renderSettings = (settings) => {
    return settings.map((setting, index) => (
      <div className="setting-item" key={index}>
        <span className="setting-name">{setting.name}</span>
        <span className="setting-value">{setting.value}</span>
      </div>
    ));
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>Account Settings</h1>
      </div>

      {/* Personal Info */}
      <section className="settings-section">
        <div className="settings-section-header">
          <h2>Personal Info</h2>
          <button className="edit-button">Edit</button>
        </div>

        <div className="settings-list">{renderSettings(personalInfo)}</div>
      </section>

      {/* Preferences */}
      <section className="settings-section">
        <div className="settings-section-header">
          <h2>Preferences</h2>
        </div>

        <div className="settings-list">{renderSettings(preference)}</div>
      </section>

      {/* Privacy */}
      <section className="settings-section">
        <div className="settings-section-header">
          <h2>Privacy</h2>
        </div>

        <div className="settings-list">{renderSettings(privacy)}</div>
      </section>

      {/* Delete Account */}
      <div className="delete-account">
        <button>Delete Account</button>
      </div>
    </div>
  );
}
