import React from "react";
import "./MapDisplay.css";

function MapDisplay({ mapUrl }) {
  return (
    <div className="full-screen-map">
      <iframe
        width="100%"
        height="100vh"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={mapUrl}
        title="Google Map"
      ></iframe>
    </div>
  );
}

export default MapDisplay;
