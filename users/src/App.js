import './App.css';
import React, {useState} from 'react';
import NewUserForm from './components/NewUserForm/NewUserForm';
import UsersList from './components/UsersList/UsersList';
import ErrorModalPortal from './components/Modals/ErrorModal/ErrorModalPortal';

function App() {

  const [users, setUsers] = useState([]);
  const [errorState, setErrorState] = useState({state: false, title: '', message: ''});

  const addNewUser = (newUser) => {
    setUsers(prevState => {
      return ([...prevState, newUser]);
    })
  };

  const handleInvalidName = (message) => {
    setErrorState({state: true, title: 'Invalid Name', message: message});
  };
  
  const handleInvalidAge = (message) => {
    setErrorState({state: true, title: 'Invalid Age', message: message});
  };

  const setErrorModalVisible = (state) => {
    setErrorState(prevState => {
      return {...prevState, state: state};
    });
  };

  return (
    <div className="App">
      {errorState.state && <ErrorModalPortal setVisible={setErrorModalVisible} title={errorState.title} message={errorState.message}/>}
      <NewUserForm createUser={addNewUser} handleInvalidName={handleInvalidName} handleInvalidAge={handleInvalidAge}/>
      <UsersList items={users}/>
    </div>
  );
}

export default App;
