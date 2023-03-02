import { Box, Button, Typography } from "@mui/material";

import "./Share.css"

function Share({
    name,
    location
}) {
    return ( 
        <div className="share_body">
            {/* Welcome msg */}
            <Typography sx={{ padding: 2 }}>Howdy,<br />{name}<br />Share Your Weather!</Typography>

            {/* Location */}
            <Box sx={{ p: 2, border: '1px solid grey', borderRadius: '50%', padding: 2, width: '50%', margin: 'auto' }}>{location}</Box>

            {/* Temperature - bar*/}
            <Box sx={{ padding: 2 }}>Temperature</Box>

            {/* Button */}
            <Button>Share</Button>
        </div>
     );
}

export default Share;