import { Button, Slider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { GoogleMap } from "@react-google-maps/api";
import { useCallback, useMemo, useRef, useState } from "react";
// import { IgrLinearGauge } from "igniteui-react-gauges";
// import { IgrLinearGaugeModule } from "igniteui-react-gauges";
import Place from "../Place/Place";
import List from "../List/List";
import "./Map.css";

// IgrLinearGaugeModule.register();

function Map(users) {
  const [temperature, setTemperature] = useState();
  const [precipitation, setPrecipitation] = useState();
  const [userList, setUserList] = useState([]);
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
  const marks = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 5,
      label: "5",
    },
  ];

  const valuetext = (value) => {
    return `${value}`;
  };

  // console.log(linearValue);

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

        <Box className="profile-gauge">
          <Typography>Temperature</Typography>
          <Slider
            aria-label="Custom marks"
            min={1}
            max={5}
            defaultValue={3}
            step={1}
            valueLabelDisplay="auto"
            marks={marks}
            getAriaValueText={valuetext}
          />
          <Typography>Precipitation</Typography>
          <Slider
            aria-label="Custom marks"
            min={1}
            max={5}
            defaultValue={3}
            step={1}
            valueLabelDisplay="auto"
            marks={marks}
            getAriaValueText={valuetext}
          />
        </Box>

        <div className="profile-submit-btn">
          <Button variant="contained" onSubmit={() => {}}>
            Submit
          </Button>
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

{
  /* <div className="profile-gauge">
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
        </div> */
}
