// USECONTEXT
// import { useEffect, useState, createContext } from "react";
import Map from "./components/Map/Map";
import "./App.css";
// import { db } from "./config/firebase";
// import { getDocs, collection } from "firebase/firestore";

// USECONTEXT
// export const UserContext = createContext();

function App() {
  // const [userList, setUserList] = useState([]);

  // const usersCollectionRef = collection(db, "users");

  //get data from firestore
  // const getUserList = async () => {
  //   try {
  //     const data = await getDocs(usersCollectionRef);
  //     const filteredData = data.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     setUserList(filteredData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getUserList();
  // }, []);

  return (
    // <UserContext.Provider value={userList}>
    <Map />
    // {/* </UserContext.Provider> */}
  );
}

export default App;
