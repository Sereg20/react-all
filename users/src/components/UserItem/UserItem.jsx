import React from "react";
import cl from './UserItem.module.css';

const UserItem = ({name, age}) => {

    return (
        <div className={cl['user-item']}>
            {`${name} (${age}) years old`}
        </div>
    );
}

export default UserItem;