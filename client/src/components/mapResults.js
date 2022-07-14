import React from "react";
import Box from "@mui/material/Box";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "75vh",
};

const center = {
  lat: 33.71740163743674,
  lng: -117.78066009721049,
};

const testMarker = {
  lat: 33.71893894786393,
  lng: -117.78470183068126,
};

export default function MapResults() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDeH_zNnYAE6tXaWtsYFWBCH2UjTx-RTPw",
  });

  // const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    // setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    // setMap(null);
  }, []);

  return (
    <Box>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <Marker position={testMarker} animation={2} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </Box>
  );
}
