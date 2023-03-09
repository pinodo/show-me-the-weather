// USECONTEXT
import {
  useEffect,
  useState,
  // createContext,
} from "react";
import Map from "./components/Map/Map";
import "./App.css";
import { db } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";

// USECONTEXT
// export const UserContext = createContext();

function App() {
  const [userList, setUserList] = useState([]);

  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUserList = async () => {
      try {
        const data = await getDocs(usersCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log("filteredData", filteredData);
        // console.log("data.docs", data.docs);
        // console.log("data", data);
      } catch (error) {
        console.log(error);
      }
    };

    getUserList();
  }, []);
  // USECONTEXT
  // const [user, setUser] = useState("Alvin");

  return (
    // USECONTEXT
    // <UserContext.Provider value={user}>
    <Map />
    // </UserContext.Provider>
  );
}

export default App;
