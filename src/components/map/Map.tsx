import React, { FC, useState, useCallback } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { CoordinatesProps } from "global";

const containerStyle = {
  width: "100%",
  height: "400px",
};

interface MapProps {
  coordinates: CoordinatesProps;
}

interface DefaultProps {
  center: google.maps.LatLngLiteral;
  zoom: number;
}

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const Map: FC<MapProps> = ({ coordinates }) => {
  const defaultProps: DefaultProps = {
    center: {
      lat: Number(coordinates.lat),
      lng: Number(coordinates.lng),
    },
    zoom: 10,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_API_KEY ? GOOGLE_API_KEY : "",
  });

  // eslint-disable-next-line
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds(defaultProps.center);
    map.fitBounds(bounds);

    setMap(map);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="mt-6">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultProps.center}
        zoom={defaultProps.zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={defaultProps.center} />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default React.memo(Map);
