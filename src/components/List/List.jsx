import { useContext } from "react";
import { UserContext } from "../../components/Map/Map";
// import { useState } from "react";
import "./List.css";

function List() {
  // const [filteredUserList, setFilteredUserList] = useState([]);
  const userList = useContext(UserContext);
  return (
    <div className="list-body">
      {userList.map((user) => (
        <div key={user.id}>
          {user.photoURL === "" ? "Default Photo URL" : user.photoURL} |{" "}
          {user.temperature} | {user.precipitation}
        </div>
      ))}
    </div>
  );
}

export default List;
