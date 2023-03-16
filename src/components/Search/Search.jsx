import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from "@reach/combobox";
import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import "@reach/combobox/styles.css";
import "./Search.css";
import { Typography } from "@mui/material";

function Search({ setUserLocation }) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (val) => {
    setValue(val, false);
    clearSuggestions();

    const result = await getGeocode({ address: val });
    const { lat, lng } = await getLatLng(result[0]);
    setUserLocation({ lat, lng });
    // console.log(
    //   "Search input value",
    //   result[0].address_components[0].long_name
    // );
  };

  const onReset = () => {
    setValue("");
  };

  return (
    <div>
      <Typography>Enter the location</Typography>
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready}
          className="combobox-input"
          placeholder="Search location here"
        />
        <ComboboxPopover>
          <ComboboxList onClick={onReset}>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

export default Search;
