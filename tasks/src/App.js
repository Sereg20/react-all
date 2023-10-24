import React, {useState, useEffect, useCallback} from 'react';
import './App.css';
import TasksList from './components/TasksList/TasksList';
import NewTask from './components/NewTask/NewTask';
import Card from './components/UI/Card/Card';
import TaskContextProvider from './context/TaskContextProvider';
import useRequest from './hooks/task-hook';

function App() {
  const [tasks, setTasks] = useState([]);
  const {error, isLoading, sendRequest: fetchTasks} = useRequest();

  useEffect(() => {
    const transformData = (data) =>  {
      console.log("executed")
      const tasksResponse = Object.entries(data).map(item => {
        return {
          id: item[0],
          ...item[1]
        }
      });
  
      setTasks(tasksResponse);
    };

    fetchTasks(
      { url: 'https://react-a7826-default-rtdb.europe-west1.firebasedatabase.app/Tasks.json'}, transformData
    );
  }, [fetchTasks]);


  
  async function createTask(title) {
    // setError(false);
    // setIsLoading(true);

    const newTask = { title };
    try {
      const response = await fetch('https://react-a7826-default-rtdb.europe-west1.firebasedatabase.app/Tasks.json', {
        method: 'POST',
        body: JSON.stringify(newTask)
      });

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      // fetchTasks({ url: 'https://react-a7826-default-rtdb.europe-west1.firebasedatabase.app/Tasks.json'}, transformData);
    } catch(e) {
      console.log(e.message);
      // setError(true);
    } finally {
      // setIsLoading(false);
    }
  }

  async function deleteTask(id) {
    console.log('Deleted!')
  }

  return (
    <div className="App">
      <Card className="card">
        <NewTask createTask={createTask}/>
      </Card>
      <TaskContextProvider deleteTask={deleteTask}>
        <Card>
          { isLoading && 'Loading...' }
          { !isLoading && !error && <TasksList items={tasks}/> }
          { error && !isLoading && <h2>Something went wrong</h2> }
        </Card>
      </TaskContextProvider>
    </div>
  );
}

export default App;
