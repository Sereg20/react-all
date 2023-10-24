import React, {useState, useEffect} from 'react';
import DishProvider from './context/DishProvider';

import './App.css';
import Header from './components/Header/Header';
import MainInfo from './components/MainInfo/MainInfo';
import DishesList from './components/DishesList/DishesList';

function App() {

  const [meals, setMeals] = useState([]);

  const transformData = (data) => {
    const meals = Object.entries(data).map(item => {
      return {
        id: item[0],
        ...item[1]
      };
    });

    setMeals(meals);
  };

  const fetchDishes = async () => {
    try {
      const response = await fetch('https://react-a7826-default-rtdb.europe-west1.firebasedatabase.app/Dishes.json');

      if (!response.ok) {
        throw new Error('Somethng went wrong!');
      }

      const data = await response.json();
      transformData(data);
    } catch(e) {
      console.log('Error:' + e.message);
    }
    
  };

  useEffect(() => {
    fetchDishes();
  }, [])

  return (
    <DishProvider>
      <div className="App">
        <Header />
        <MainInfo />
        <DishesList items={meals}/>
      </div>
    </DishProvider>
  );
}

export default App;
