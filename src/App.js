import Map from "./components/Map/Map";
import List from "./components/List/List";
import { Box } from "@mui/system";
import { useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import "./App.css";

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;
}

export default App;
