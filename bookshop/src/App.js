import React, {useState, useMemo} from 'react';
import UserList from './components/UserList'
import UserForm from './components/UserForm'
import './styles/App.css'
import UserFilter from './components/UsersFilter';
import CreateUserModal from './components/UI/Modals/CreateUserModal/CreateUserModal';
import MyButton from './components/UI/button/MyButton';


function App() {
  let [developersUI, setDevelopers] = useState([
    {id: 1, name: "Sergey", surname: "Shnitko", position: "SAPUI5 Front-End Developert"},
    {id: 2, name: "Bob", surname: "Kanavalov", position: "React Front-End Developert"},
    {id: 3, name: "Max", surname: "Marti", position: "Angular Front-End Developert"}
  ]);

  let [filter, setFilter] = useState({sort: '', query: ''});
  let [createUserModalVisible, setCreateUserModalVisible] = useState(false);


  let sortedUsers = useMemo(() => {
    if (filter.sort) {
      return [...developersUI].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return developersUI;
  }, [filter.sort, developersUI]);

  let sortedAndSearchedUsers = useMemo(() => {
    return sortedUsers.filter(user => user.name.includes(filter.query));
  }, [filter.query, sortedUsers]);

  function createUser(newUser) {
    setDevelopers([...developersUI, newUser]);
  }

  function deleteUser(userID) {
    setDevelopers([...developersUI].filter(user => user.id !== userID));
  }

  return (
    <div className='App'>
      <CreateUserModal visible={createUserModalVisible}>
        <UserForm create={createUser}/>
      </CreateUserModal>

      <MyButton onClick={() => setCreateUserModalVisible(true)}>
        Create User
      </MyButton>
      <UserFilter filter={filter} setFilter={setFilter}/>
      <UserList developers={sortedAndSearchedUsers} title='UI Developers' deleteUser={deleteUser}/>
    </div>
  );
}

export default App;
