import { Typography } from "@mui/material";
import { useState } from "react";
import App from "../../App";
import "./Search.css"

function Search({
    getInputValue
}) {
    const [location, setLocation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const getAndResetInputValue = () => {
        getInputValue(location);
        setLocation("");
    }

    return ( 
        <div className="search-bar">
            <Typography sx={{ fontSize:'0.9rem' }}>Where do you want to check?</Typography>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => {
                            setLocation(e.target.value);
                        }
                    }
                />
                <button onClick={getAndResetInputValue}>Submit</button>
            </form>

            {/* <div id="search">
                <input type="text" placeholder="Search here"/>
                <button>Submit</button>
            </div> */}
        </div>
     );
}

export default Search;