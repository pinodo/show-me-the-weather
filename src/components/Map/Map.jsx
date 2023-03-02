import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useState } from "react";
import Search from "../Search/Search";
import "./Map.css"

const mockLocation = {
  "vancouver": ["49.240906", "-123.1695677", "12z"],
  "burnaby": ["49.2200111", "123.0237459", "12z"],
  "newwestminster": ["49.1969052", "122.9444617", "13z"],
}

function Map(
  users
) {
    const [inputLocation, setInputLocation] = useState("");
    
    // const [info, setInfo] = useState([49.2357012, -123.0126994, 11.5])
    const [lat, setLat] = useState(49.2357012);
    const [lng, setLng] = useState(-123.0126994);
    const [zoom, setZoom] = useState(11.5);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDkvLWqkSGl1zGB_TqjKuJnV6q465ZnpuI",
    });
    
    if (!isLoaded) return <div>Loading...</div>;

    // console.log(users["users"][0]);
    const userList = users["users"][0];
    
    const getInputValue = (value) => {
      setInputLocation(value.trim().toLowerCase());
      console.log(inputLocation);
    };

    // data manipulation

    // getLatFromData(inputLocation);

    console.log(mockLocation["vancouver"][0])
    
    const setLocationAndCheck = () => {
      // const userLat = mockLocation[inputLocation][0];
      // setLat(mockLocation[inputLocation][0]);
      // setLng(mockLocation[inputLocation][1]);
      // setZoom(mockLocation[inputLocation][2]);
      
      // getLatFromData(inputLocation);

      console.log(inputLocation)
      console.log(inputLocation.trim().toLowerCase())
      return inputLocation.trim().toLowerCase() in mockLocation
    }

    return (
      <>
        <Search
          getInputValue={getInputValue}
        />
        {
          setLocationAndCheck()?
            <GoogleMap
              zoom={zoom}
              center={{lat: lat, lng: lng}}
              mapContainerClassName="map-container"
            >
            </GoogleMap> :
          //   <GoogleMap
          //   zoom={zoom}
          //   center={{lat: lat, lng: lng}}
          //   mapContainerClassName="map-container-error"
          // >
          // </GoogleMap>
          void(0)
        }
      </>
     );
}

export default Map;

// 49.2357012,-123.0126994,11.9z