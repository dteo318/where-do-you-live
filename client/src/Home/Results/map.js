import React from "react";
import Box from "@mui/material/Box";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "75vh",
};

const Map = ({ reviewData, setSelectedReview, center }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDeH_zNnYAE6tXaWtsYFWBCH2UjTx-RTPw",
  });

  // const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(
    function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      // setMap(map);
    },
    [center]
  );

  const onUnmount = React.useCallback(function callback(map) {
    // setMap(null);
  }, []);

  const onMarkerClick = (event, dataID) => {
    setSelectedReview((prevState) => ({
      ...prevState,
      [dataID]: true,
    }));
  };

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
          {reviewData.map((data, idx) => (
            <Marker
              position={data.coords}
              animation={2}
              label={(idx + 1).toString()}
              key={data.id}
              onClick={(e) => onMarkerClick(e, data.id)}
            />
          ))}
        </GoogleMap>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Map;
