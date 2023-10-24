import React, {useState} from 'react'
import MyBtn from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const UserForm = ({create}) => {

    let [form, setNewUser] = useState({name: '', position: ''});

    function addUser(event) {
        event.preventDefault();

        const newUser = {
            ...form, 
            id: Date.now()
        }
        create(newUser);
        setNewUser({name: '', position: ''});    
    }

    return (
        <form>
            <MyInput 
                value={form.name} 
                onChange={(e) => setNewUser({...form, name: e.target.value})} 
                placeholder='Name'>
            </MyInput>
            <MyInput 
                value={form.position} 
                onChange={(e) => setNewUser({...form, position: e.target.value})} 
                placeholder='Position'>
            </MyInput>
            <MyBtn onClick={addUser}>Add User</MyBtn>
        </form>
    )
}

export default UserForm;