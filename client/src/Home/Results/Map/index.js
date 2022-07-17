import React from "react";
import Box from "@mui/material/Box";
import { GoogleMap } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import { toggleReview } from "../Review/reviewSlice";
import { useSelector, useDispatch } from "react-redux";
import { setLocation } from "./mapSlice";

const containerStyle = {
  width: "100%",
  height: "75vh",
};

const Map = ({ isLoaded }) => {
  const reviewData = useSelector((state) => state.review.data);
  const center = useSelector((state) => state.map.location);
  const dispatch = useDispatch();
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    map.setZoom(15);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const onMapDragged = () => {
    if (map) {
      const newCenter = map.getCenter();
      dispatch(
        setLocation({
          lat: newCenter.lat(),
          lng: newCenter.lng(),
        })
      );
    }
  };

  const onMarkerClick = (dataCenter, dataID) => {
    dispatch(toggleReview(dataID));
    dispatch(setLocation(dataCenter));
  };

  return (
    <Box>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          onLoad={onLoad}
          onUnmount={onUnmount}
          onDragEnd={onMapDragged}
        >
          {/* Child components, such as markers, info windows, etc. */}
          {reviewData.map((data, idx) => (
            <Marker
              position={data.coords}
              animation={2}
              label={(idx + 1).toString()}
              key={data.id}
              onClick={() => onMarkerClick(data.coords, data.id)}
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
