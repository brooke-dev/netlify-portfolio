import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import Geocode from 'react-geocode';
import './leafletmap.css';

function LeafletMap() {
  // Define the initial state for the user's location
  const [location, setLocation] = useState({
    lat: 0,
    lng: 0,
  });

  // Define the initial state for the user's name and address
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');


  // Define a custom hook to center the map on the user's location
  function CenterMap({ coords }) {
    const map = useMap();
    map.setView(coords);
    return null;
  }

  // Define a function to geocode the user's address
  async function geocodeAddress(address) {
    try {
      const response = await Geocode.fromAddress(address);
      const { lat, lng } = response.results[0].geometry.location;
      setLocation({ lat, lng });
    } catch (error) {
      console.error(error);
    }
  }

  // Define a function to handle changes to the user's name input
  function handleNameChange(event) {
    setName(event.target.value);
  }

  // Define a function to handle changes to the user's address input
  function handleAddressChange(event) {
    setAddress(event.target.value);
    geocodeAddress(event.target.value);
  }
  

  useEffect(() => {
    // Get the user's location from the browser's geolocation API
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude: lat, longitude: lng } = position.coords;
        setLocation({ lat, lng });
      },
      error => {
        console.error(error);
      }
    );
  }, []);

   // Define a function to handle the form submission
  //  function handleSubmit(event) {
  //   event.preventDefault();
  //   geocodeAddress(address);
  // }

  function handleSubmit(event) {
    event.preventDefault();
    geocodeAddress(address).then(response => {
      const { lat, lng } = response.results[0].geometry.location;
      setLocation({ lat, lng });
      setAddress('');
    });
  }
  

  return (
    // <div className='map-container'>
    //   <h1>Leaflet Map</h1>
    //   <div>
    //     <label htmlFor="name">Name:</label>
    //     <input id="name" type="text" value={name} onChange={handleNameChange} />
    //   </div>
    //   <div>
    //     <label htmlFor="address">Address:</label>
    //     <input id="address" type="text" onChange={handleAddressChange} />
    //   </div>
    //   <MapContainer  key={`${location.lat}-${location.lng}`} center={[location.lat, location.lng]} zoom={16} style={{ height: '400px', width: '100%' }}>
    //     <CenterMap coords={[location.lat, location.lng]} />
    //     <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    //     <Marker position={[location.lat, location.lng]}>
    //       <Popup>
    //         <div>
    //           <h3>{name}</h3>
    //           <p>{location.lat}, {location.lng}</p>
    //         </div>
    //       </Popup>
    //     </Marker>
    //   </MapContainer>
    // </div>

    <div className='map-container'>
      <h2>Leaflet Map</h2>
      <p>Leave your mark! Where are you visiting from?</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" value={name} onChange={handleNameChange} required />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          {/* <input id="address" type="text" value={address} onChange={handleAddressChange} required /> */}
          <input id="address" type="text" value={address} onChange={handleAddressChange} />

        </div>
        <button type="submit">Add Marker</button>
      </form>
      <div className="map-box">
        <MapContainer key={`${location.lat}-${location.lng}`} center={[location.lat, location.lng]} zoom={16} style={{ height: '400px', width: '100%' }}>
        <CenterMap coords={[location.lat, location.lng]} />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[location.lat, location.lng]}>
          <Popup>
            <div>
              <h3>{name}</h3>
              <p>visting from: {location.lat}, {location.lng}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      </div>
      
    </div>

  );
}

export default LeafletMap;

