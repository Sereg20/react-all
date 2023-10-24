import React from "react";
import cl from './UsersList.module.css';
import UserItem from "../UserItem/UserItem";

const UsersList = ({items}) => {
    
    return (
        <div className={cl['users-list']}>
            {items.length 
                ? items.map(user => <UserItem key={user.id} name={user.name} age={user.age}/>)
                : <h1>No Users Found!</h1>
            }
        </div>
    );
}

export default UsersList;