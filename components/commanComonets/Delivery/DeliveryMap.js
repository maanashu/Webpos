import React, { useState } from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";
import styles from "../GoogleMap/mapCustomStyle";

const MapWithDirections = () => {
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);

  // Sample data for directions response
  const sampleDirectionsResponse = {
    request: {
      origin: { lat: 30.6596152, lng: 76.7296415 }, // India (Latitude and Longitude of India)
      destination: { lat: 30.9004664, lng: 75.7742723 }, // USA (Latitude and Longitude of USA)
    },
    routes: [
      {
        overview_path: [
          // Array of LatLng coordinates for the polyline
          { lat: 30.6596152, lng: 76.7296415 }, // Sample coordinate 1
          { lat: 30.9004664, lng: 75.7742723 }, // Sample coordinate 2
          // Add more coordinates as needed
        ],
      },
    ],
  };

  // When the map loads, setMap will be called with the map instance
  const onLoad = (map) => setMap(map);

  // When the directions response is available, setDirectionsResponse will be called with the response
  // For demonstration purposes, we're using the sampleDirectionsResponse here
  useState(() => {
    setDirectionsResponse(sampleDirectionsResponse);
  }, []);
  function createMapOptions(maps) {
    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      styles,
    };
  }
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMap
        center={{ lat: 37.7749, lng: -122.4194 }}
        zoom={1}
        mapContainerStyle={{ height: "100%", width: "100%" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: true,
        }}
        onLoad={onLoad}
        bootstrapURLKeys={{ key: "AIzaSyBrCmIsXxbG76U0Jz7rA75Wg-Hc0kW-8Ww" }}
      >
        {directionsResponse && (
          <DirectionsRenderer
            directions={directionsResponse}
            options={{
              polylineOptions: {
                // Custom polyline options here
                strokeColor: "#FF0000", // Red color
              },
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
};

export default MapWithDirections;
