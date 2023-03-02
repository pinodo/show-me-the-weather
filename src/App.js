import Share from "./components/Share/Share";
import Map from "./components/Map/Map"
import List from "./components/List/List"
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

const mockData = {
  "users": [
    {
      "userInfo": [ "9aba6086-a30a-4369-b507-c0d1683c5990", "Tressa Alex", "burnaby", "url_talex" ],
      "temperature": 5,
      "precipitation": 2,
    },
    {
      "userInfo": [ "9757866a-406b-4b38-97b8-1a5a4decebe1", "Kelan Finnley", "vancouver", "url_kfinnley" ],
      "temperature": 4,
      "precipitation": 1,
    },
    {
      "userInfo": [ "ccbee947-89ee-4607-842b-6fc3319dc574", "Lincoln Sallie", "metrotown", "url_lsallie" ],
      "temperature": 5,
      "precipitation": 3,
    },
    {
      "userInfo": [ "99da9991-0552-4cd1-87f9-0b688d5cd9f3", "Anona Isador", "vancouver", "url_aisador" ],
      "temperature": 5,
      "precipitation": 1,
    },
    {
      "userInfo": [ "62313059-37eb-4103-9e43-878b5300a883", "Brie Janel", "new westminster", "url_bjanel" ],
      "temperature": 3,
      "precipitation": 2,
    },
  ]
}
    // {"firstName":"Tressa", "lastName":"Alex", temperature:5, humidity:2, precipitation:2},
    // {"firstName":"Kelan", "lastName":"Finnley", temperature:4, humidity:1, precipitation:2},
    // {"firstName":"Lincoln", "lastName":"Sallie", temperature:3, humidity:2, precipitation:1},
    // {"firstName":"Anona", "lastName":"Isador", temperature:5, humidity:2, precipitation:1},
    // {"firstName":"Brie", "lastName":"Janel", temperature:3, humidity:3, precipitation:1},


function App() {
  const [name, setName] = useState("Alvin(default)");
  const [location, setLocation] = useState("Vancouver(default)");
  const [filteredLocation, setFilteredLocation] = useState([]);
  const [users, setUsers] = useState([]);

  // Set {users} to data (after fetching)
  useEffect(() => {
    setUsers(mockData.users);
  });

  // console.log(users);
  // useEffect(() => {
  //   const filteredLocation = users.filter(
  //     (user) => {}
  //   )
  // })

  // this.retrieveData = function () {
  //   return this.users
  // }

  // ** SHOULD WORK **
  // static function - used to retrieve the data
  //
  // this.state = {
  //   userList: users[0]
  // };
  //
  // App.retrieveData = function() {
  //   return users;
  // }

  // console.log(users[0].temperature);
  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 1,
      gridTemplateRows: 'auto',
      gridTemplateAreas: `"sidebar main main main"`,
      height: '100vh',
      marginLeft: 1,
    }}>
      <Box sx={{ gridArea: 'sidebar'}}>
        <Share
          name={name}
          location={location}/>
      </Box>
      <Box sx={{ gridArea: 'main' }}>
        <Map 
          users={[users]}
        />
        <List
          name={name}
          users={[users]}
        />
      </Box>
    </Box>
  );
}

export default App;
