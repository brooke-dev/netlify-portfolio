import React, { useState } from "react";
import LeafletMap from "./LeafletMap.js";
import './leafletmap.css';

function MapForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [markers, setMarkers] = useState([
    {
      id: 1,
      position: [39.921849, -105.078675],
      popup: "Brooke: Hi, this is where I'm working from! Welcome to my portfolio!",
    },
    {
      id: 2,
      position: [43.220337, -85.549233],
      popup: "Brooke: I moved from Michigan 2 years ago, trading the great lakes for mountains! My love of the outdoors, and software engineering are combined here in my leaflet experiment! ",
    },

  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const position = await getCurrentPosition();
      const newMarker = {
        id: Date.now(),
        position: [position.coords.latitude, position.coords.longitude],
        popup: `${name}: ${message}`,
      };
      setMarkers([...markers, newMarker]);
      setName("");
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  return (
    <div className="map-form-container">
      <h2>Make Your Mark </h2>
      <h5>(enable your location if you want to participate!)**</h5>
      <h3> Where are you visiting from?</h3>
      <form name="map" className="map-form" onSubmit={handleSubmit} data-netlify="true" >
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input name"
          />
        </div>
        <div className="form-field">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="form-input message"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>** Please note that this feature is still a work in progress, and your geolocation data is being collected solely for the purpose of adding a marker to this map. I do not store this data permanently or use it for any other purpose. By clicking 'submit', you acknowledge that you understand and accept the use of your geolocation data for this specific purpose, and that I am not liable for any misuse of this data by any third party.</p>
      <LeafletMap markers={markers} />
    </div>
  );
}

export default MapForm;