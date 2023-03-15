import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
  createContext,
} from "react";
import { db } from "../../config/firebase";
import Search from "../Search/Search";
import List from "../List/List";
import "./Map.css";
import { getDocs, collection } from "firebase/firestore";
import Submit from "../Submit/Submit";

export const UserContext = createContext();

const libraries = ["places"];

function Map() {
  const [userLocation, setUserLocation] = useState();
  const [userList, setUserList] = useState([]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });

  const usersCollectionRef = collection(db, "users");

  //get data from firestore
  const getUserList = async () => {
    try {
      const data = await getDocs(usersCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUserList(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

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

  const onLoad = useCallback((map) => (mapRef.current = map), []);
  // const userLocations = useMemo(() => generateLocation(center), [center]);

  useEffect(() => {
    getUserList();
  }, []);

  // SUBMIT
  // const marks = [
  //   {
  //     value: 1,
  //     label: "1",
  //   },
  //   {
  //     value: 2,
  //     label: "2",
  //   },
  //   {
  //     value: 3,
  //     label: "3",
  //   },
  //   {
  //     value: 4,
  //     label: "4",
  //   },
  //   {
  //     value: 5,
  //     label: "5",
  //   },
  // ];

  // const valuetext = (value) => {
  //   return `${value}`;
  // };

  // const handleTemperatureSliderChange = (event, newValue) => {
  //   setTemperature(newValue);
  //   console.log("Temperature", newValue);
  // };

  // const handlePrecipitationSliderChange = (event, newValue) => {
  //   setPrecipitation(newValue);
  //   console.log("Precipitation", newValue);
  // };

  // const onSubmitUser = async () => {
  //   await addDoc();
  // };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <UserContext.Provider value={userList}>
      <div className="container">
        <div className="sidebar">
          {/* SEARCH */}
          <Search
            setUserLocation={(position) => {
              setUserLocation(position);
              mapRef.current?.panTo(position);
            }}
          />

          {/* PROFILE */}
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

          {/* SUBMIT */}
          <Submit />
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
    </UserContext.Provider>
  );
}

// const generateLocation = (position) => {
//   // const userLocations = [];
// };

export default Map;
