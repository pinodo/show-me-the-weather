import UserInfo from "../UserInfo/UserInfo";
import "./List.css";

function List({ name, users }) {
  return (
    <div className="list-body">
      {/* maps the elements of a list
                params: element, index
            */}
      {/* {userList?.map((user, i) => (
                <div key={i}>
                    <UserInfo 
                        user={user}
                    />
                </div>
            ))} */}
      list
    </div>
  );
}

export default List;
