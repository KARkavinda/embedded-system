import React, { useState } from "react";
import "./App.css";

function App() {
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [mapUrl, setMapUrl] = useState("");
  const [isLocationVisible, setIsLocationVisible] = useState(true);

  const handleLatitudeChange = (e) => {
    setLatitude(e.target.value);
  };

  const handleLongitudeChange = (e) => {
    setLongitude(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (latitude && longitude) {
      // Construct the URL for the Google Maps embed iframe without using an API key
      const url = `https://www.google.com/maps?q=${latitude},${longitude}&z=14&output=embed`;
      setMapUrl(url);
      setIsLocationVisible(false); // Hide the input form after showing the map
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Where Am I?</h1>

        {isLocationVisible ? (
          <form onSubmit={handleSubmit}>
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
            <button type="submit">Show Locations</button>
          </form>
        ) : (
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
        )}
      </header>
    </div>
  );
}

export default App;
