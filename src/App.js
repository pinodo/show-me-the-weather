import Map from "./components/Map/Map";
// import List from "./components/List/List";
// import { Box } from "@mui/system";
// import { useEffect, useMemo, useRef } from "react";
// import { useLoadScript } from "@react-google-maps/api";
import "./App.css";

// const libraries = ["places"];

function App() {
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  //   // [libraries]: libraries,
  // });

  // console.log(1);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     console.log("Latitude is :", position.coords.latitude);
  //     console.log("Longitude is :", position.coords.longitude);
  //   });
  // });

  // if (!isLoaded) return <div>Loading...</div>;

  return <Map />;
}

export default App;
