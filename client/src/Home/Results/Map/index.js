import React from "react";
import Box from "@mui/material/Box";
import { GoogleMap } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import { toggleReview } from "../Review/reviewSlice";
import { useSelector, useDispatch } from "react-redux";

const containerStyle = {
  width: "100%",
  height: "75vh",
};

const Map = ({ isLoaded }) => {
  const reviewData = useSelector((state) => state.review.data);
  const center = useSelector((state) => state.map.location);
  const dispatch = useDispatch();

  // TODO Center the map based on clicked review
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

  // const onMarkerClick = (event, dataID) => {
  //   setSelectedReview((prevState) => ({
  //     ...prevState,
  //     [dataID]: true,
  //   }));
  // };

  return (
    <Box>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15} // TODO - fix zoom issue
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
          {reviewData.map((data, idx) => {
            console.log("Marker", data);
            // TODO - fix marker not rendering properly
            return (
              <Marker
                position={data.coords}
                animation={2}
                label={(idx + 1).toString()}
                key={data.id}
                onClick={() => dispatch(toggleReview(data.id))}
              />
            );
          })}
        </GoogleMap>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Map;