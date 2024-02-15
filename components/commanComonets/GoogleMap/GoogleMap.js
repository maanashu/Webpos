import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import styles from "./mapCustomStyle";

const GoogleMap = ({ children }) => {
  const [location, setLocation] = useState({
    longitude: "",
    latitude: "",
  });

  const defaultProps = {
    center: {
      lat: location.latitude || 30.7046,
      lng: location.longitude || 76.7179,
    },
    zoom: 0,
  };

  function createMapOptions(maps) {
    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: true,
      styles,
      zoomControl: false,
      fullscreenControl: false,
    };
  }


  const center = { lat: 37.7749, lng: -122.4194 }; // Set your initial map center
  const zoom = 13; // Set your initial zoom level
  const polylineCoords = [
    { lat: 37.7749, lng: -122.4194 }, // Example coordinates
    { lat: 37.789, lng: -122.3895 },  // Example coordinates
    // Add more coordinates as needed
  ];


  const renderPolylines = () => {
    if (!polylineCoords || polylineCoords.length < 2) {
      return null;
    }

    const polyline = new window.google.maps.Polyline({
      path: polylineCoords,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });

    return <GoogleMapReact.Polyline path={polyline.getPath().getArray()} options={polyline} />;
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);

  return (
    <div className="google-map-container">
      <GoogleMapReact
        options={createMapOptions}
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        // defaultZoom={defaultProps.zoom}
        // defaultCenter={center}
        defaultZoom={zoom}
      >
        {children}
        {/* {renderPolylines()} */}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;



// import React, { useState, useCallback, useEffect } from 'react';
// import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

// const GoogleMap1 = () => {
//   const [directionsResponse, setDirectionsResponse] = useState(null);
//   const [map, setMap] = useState(null);
//   const [mapStatus, setMapStatus] = useState(false)

//   const center = { lat: -34.397, lng: 150.644 };
//   const origin = { lat: -34.397, lng: 150.644 };
//   const destination = { lat: -34.397, lng: 150.744 };

//   const directionsOptions = {
//     destination: destination,
//     origin: origin,
//     travelMode: 'DRIVING',
//   };

//   // Memoize the onLoad callback
//   const onLoadCallback = useCallback((map) => {
//     setMap(map);
//   }, []);

//   const directionsCallback = (response) => {
//     if (response !== null && map !== null) {
//       if (response.status === 'OK' && mapStatus == false) {
//         setMapStatus(true)
//         setDirectionsResponse(response);
//         console.log("called");
//       } else {
//         console.error('Directions request failed:', response);
//         setMapStatus(true)
//       }
//     }
//   };

//   console.log(mapStatus,"map stattssass");

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyBbytCk92gm3MK3Mrs_374RDKf4bz0X1ck">
//       <GoogleMap
//         center={center}
//         zoom={15}
//         mapContainerStyle={{ width: '100%', height: '100%' }}
//         options={{
//           zoomControl: false,
//           streetViewControl: false,
//           mapTypeControl: false,
//           fullscreenControl: false,
//         }}
//         onLoad={onLoadCallback}
//       >
//         <DirectionsService
//           options={directionsOptions}
//           callback={directionsCallback}
//         />
//         {directionsResponse && (
//           <DirectionsRenderer directions={directionsResponse} />
//         )}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default GoogleMap1;


