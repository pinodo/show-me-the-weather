import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

function UserInfo({
    user
}) {
    // data manipulations
    const userName = user.userInfo[1];
    const userTemperature = user.temperature;
    const userPrecipitation = user.precipitation;
    const userURL = user.userInfo[3];
    
  return (
    <div className='userinfo-container'>
        {
            user? (
                <Typography>
                    Name: {userName} | Temperature: {userTemperature} | Precipitation: {userPrecipitation} | URL: {userURL}
                </Typography>
            ) : <Typography>No user found</Typography>
        }
    </div>
  )
}

export default UserInfo