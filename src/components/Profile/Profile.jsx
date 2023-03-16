import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

function Profile() {
  return (
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
  );
}

export default Profile;
