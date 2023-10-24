import React, {useState} from "react";
import cl from './NewUserForm.module.css';
import AddUserBtn from "../UI/AddUserBtn/AddUserBtn";

const NewUserForm = ({createUser, handleInvalidName, handleInvalidAge}) => {

    const [newUserData, setNewUserData] = useState({name: '', age: ''});

    const onNameChange = (e) => {
        setNewUserData(prevState => {
            return {...prevState, name: e.target.value};
        });
    };

    const onAgeChange = (e) => {
        setNewUserData(prevState => {
            return {...prevState, age: e.target.value};
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (validateNameField(newUserData.name) ||
            validateAgeField(newUserData.age)) {
            return;
        }

        const newUser = {
            ...newUserData,
            id: Date.now()
        };

        createUser(newUser);
        setNewUserData({name: '', age: ''});
    };

    const validateNameField = (value) => {
        if (value.trim().length === 0) {
            const errorMsg = 'User Name must not be empty!';
            handleInvalidName(errorMsg);
            return true;
        } else {
            return false;
        }
    };

    const validateAgeField = (value) => {
        let errorMsg;

        if (value.trim().length === 0) {
            errorMsg = 'User age must not be empty!';
        } 
        
        if (+value < 1) {
            errorMsg = 'User age must be real age!';
        }

        if (!errorMsg) {
            return false;
        }

        handleInvalidAge(errorMsg);
        return true;
    };

    return (
        <form onSubmit={onSubmit} className={cl['new-user-form']}>
            <label> Username</label>
            <input type="text" value={newUserData.name} onChange={onNameChange}/>
            <label >Age (Years)</label>
            <input type="number" value={newUserData.age} onChange={onAgeChange}/>
            <div>
                <AddUserBtn type='Submit'>Add User</AddUserBtn>
            </div>
        </form>
    );
}

export default NewUserForm;