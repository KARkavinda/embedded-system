import React from "react";
import "./LocationForm.css";

function LocationForm({
  latitude,
  longitude,
  handleLatitudeChange,
  handleLongitudeChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit} className="location-form-container">
      {/* <h1>Where Am I?</h1> */}
      <div>
        <label>
          Latitude:
          <input
            type="number"
            step="any"
            value={latitude}
            onChange={handleLatitudeChange}
            placeholder="Enter latitude"
            required
          />
        </label>
      </div>
      <div>
        <label>
          Longitude:
          <input
            type="number"
            step="any"
            value={longitude}
            onChange={handleLongitudeChange}
            placeholder="Enter longitude"
            required
          />
        </label>
      </div>
      <button type="submit">Show Location</button>
    </form>
  );
}

export default LocationForm;
