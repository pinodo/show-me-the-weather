import Box from "@mui/material/Box";
import { Button, Slider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

function Submit(position) {
  //   console.log(position.position);
  const [temperature, setTemperature] = useState();
  const [precipitation, setPrecipitation] = useState();
  const usersCollectionRef = collection(db, "users");
  // google auth -> get location, name, photoURL, contributeNums

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

  const onSubmitUser = async (e) => {
    try {
      if (!temperature | !precipitation) {
        alert("Select the temperature and precipitation");
        return;
      } else {
        e.preventDefault();
        await addDoc(usersCollectionRef, {
          // contributeNums: ,
          // location: ,
          // name: ,
          // photoURL: ,
          precipitation: precipitation,
          temperature: temperature,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
        onClick={onSubmitUser}
      >
        Submit
      </Button>
    </div>
  );
}

export default Submit;
