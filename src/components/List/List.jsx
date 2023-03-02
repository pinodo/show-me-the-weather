import UserInfo from "../UserInfo/UserInfo";
import "./List.css"

function List({
    name,
    users
}) {
    // console.log(users);

    // data manipulation
    const userList = users[0];
    // console.log(userList);

    return ( 
        <div className="list-body">
            {/* maps the elements of a list
                params: element, index
            */}
            {userList?.map((user, i) => (
                <div key={i}>
                    <UserInfo 
                        user={user}
                    />
                </div>
            ))}
        </div>
     );
}

export default List;