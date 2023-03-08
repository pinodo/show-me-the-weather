import { Button, Slider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useCallback, useMemo, useRef, useState } from "react";
import Place from "../Place/Place";
import List from "../List/List";
import "./Map.css";

const libraries = ["places"];

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });

  const [temperature, setTemperature] = useState();
  const [precipitation, setPrecipitation] = useState();
  // const [userList, setUserList] = useState([]);
  const [userLocation, setUserLocation] = useState();
  const mapRef = useRef();
  const center = useMemo(() => ({ lat: 49.240906, lng: -123.1695677 }), []);
  const options = useMemo(
    () => ({
      // mapId: "d38ddb8950d85ff7", // customized map style, sometimes not rendering the maps
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  // console.log(userLocation);
  const onLoad = useCallback((map) => (mapRef.current = map), []);
  // const userLocations = useMemo(() => generateLocation(center), [center]);
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

  const handleTemperatureSliderChange = (event, newValue) => {
    setTemperature(newValue);
    console.log("Temperature", newValue);
  };

  const handlePrecipitationSliderChange = (event, newValue) => {
    setPrecipitation(newValue);
    console.log("Precipitation", newValue);
  };

  if (!isLoaded) return <div>Loading...</div>;

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

        <div className="profile-submit-logout">
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
              onChange={handleTemperatureSliderChange}
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
              onChange={handlePrecipitationSliderChange}
            />
          </Box>

          <Button
            variant="contained"
            className="profile-submit-btn"
            onSubmit={() => {}}
          >
            Submit
          </Button>
        </div>

        <div className="profile-submit-login"></div>
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

// const generateLocation = (position) => {
//   // const userLocations = [];
// };

export default Map;

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
