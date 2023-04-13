import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


function LeafletMap({markers}) {
 
  // Centered over the united states
  const [position, setPosition] = useState([39.8283, -98.5795]);


  return (
    <div className="map-box">
      <MapContainer center={position} zoom={4} style={{ height: "400px" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.position}>
            <Popup>{marker.popup}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
    

  );
}

export default LeafletMap;

