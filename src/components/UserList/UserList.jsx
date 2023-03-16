import { useContext } from "react";
import { UserContext } from "../Map/Map";
// import { useState } from "react";
import "./UserList.css";

function UserList() {
  // const [filteredUserList, setFilteredUserList] = useState([]);
  const userList = useContext(UserContext);
  return (
    <div className="list-body">
      {userList.map((user) => (
        <div key={user.id} className="list">
          <div className="list-item">
            {user.photoURL ? user.photoURL : "Default"}
          </div>
          <div className="list-item">{user.temperature}</div>
          <div className="list-item">{user.precipitation}</div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
