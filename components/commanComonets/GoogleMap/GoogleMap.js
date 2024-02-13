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
        defaultZoom={defaultProps.zoom}
      >
        {children}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
