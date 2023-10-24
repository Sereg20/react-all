import React from 'react';

const User = ({data, deleteUser}) => {

    function editUser(event) {

    }

    function deleteSelectedUser() {
        deleteUser(data.id);
    }

    return (
        <div className='user-component'>
            <div>
                <h3 className='name'>{data.name} {data.surname}</h3>
                <p className='position'>{data.position}</p>
            </div>
            
            <div className='actions'>
                <button className='edit-button user-action' onClick={editUser}>Edit</button>
                <button className='delete-button user-action' onClick={deleteSelectedUser}>Delete</button>
            </div>
        </div>
    )
}

export default User;