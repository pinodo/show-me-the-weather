import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { GoogleMap } from "@react-google-maps/api";
import { useCallback, useMemo, useRef, useState } from "react";
import { IgrLinearGauge } from "igniteui-react-gauges";
import { IgrLinearGaugeModule } from "igniteui-react-gauges";
import Place from "../Place/Place";
import List from "../List/List";
import "./Map.css";

IgrLinearGaugeModule.register();

function Map(users) {
  const [userLocation, setUserLocation] = useState();
  const mapRef = useRef();
  const center = useMemo(() => ({ lat: 49.240906, lng: -123.1695677 }), []);
  const options = useMemo(() => ({
    // mapId: "d38ddb8950d85ff7", // customized map style, sometimes not rendering the maps
    disableDefaultUI: true,
    clickableIcons: false,
  }));

  const onLoad = useCallback((map) => (mapRef.current = map), []);
  const userLocations = useMemo(() => generateLocation(center), [center]);
  const onGaugeRef = (component) => {
    if (!component) return;
  };

  return (
    <div className="container">
      <div className="search-bar">
        <Typography>Enter the location</Typography>
        <Place
          setUserLocation={(position) => {
            setUserLocation(position);
            mapRef.current?.panTo(position);
          }}
        />
        <div className="profile">
          <Typography>
            Howdy,
            <br />
            NAME
            <br />
            Share Your Weather!
          </Typography>
          <Box
            className="profile-location"
            sx={{ p: 2, border: "1px dashed grey" }}
          >
            LOCATION
          </Box>
        </div>
        <div className="profile-gauge">
          <Typography>Select temperature</Typography>
          <IgrLinearGauge
            width="100%"
            height="40px"
            minimumValue={1}
            maximumValue={5}
            interval={1}
            value={3}
            isNeedleDraggingEnabled={true}
          />
          <Typography>Select temperature</Typography>
          <IgrLinearGauge
            width="100%"
            height="40px"
            minimumValue={1}
            maximumValue={5}
            interval={1}
            value={3}
            isNeedleDraggingEnabled={true}
          />
        </div>
        <div className="profile-submit-btn">
          <button>Submit</button>
        </div>
      </div>

      <div className="map">
        <GoogleMap
          zoom={12}
          center={center}
          mapContainerClassName="map-container"
          options={options}
          onLoad={onLoad}
        ></GoogleMap>
        <List className="list-container" />
      </div>
    </div>
  );
}

const generateLocation = (position) => {
  const userLocations = [];
};

export default Map;
