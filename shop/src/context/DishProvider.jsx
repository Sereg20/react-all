import {useReducer} from "react";

import DishesContext from "./dishes";

const defaultCartState = {
    selectedDishes: [],
    totalAmount: 0,
    totalPrice: 0
};

const cartReducer = (prevState, action) => {
    if (action.type === 'ADD') {
        const newDish = {
            itemCount: +action.amount, 
            item: action.item
        };
        const existingIndex = prevState.selectedDishes.findIndex(dish => dish.item.id === action.item.id);

        let updatedList;

        if (existingIndex === -1) {
            updatedList = [...prevState.selectedDishes, newDish];
        } else {
            updatedList = [...prevState.selectedDishes];
            updatedList[existingIndex].itemCount += +action.amount;
        }
        return {
            selectedDishes: updatedList,
            totalAmount: prevState.totalAmount + +action.amount,
            totalPrice: prevState.totalPrice + +action.item.price * +action.amount
        }
    }
    if (action.type === 'REMOVE') {
        let updatedList;
        const removeItemCount = prevState.selectedDishes.find(dish => dish.item.id === action.item.id).itemCount;
        if (removeItemCount === 1) {
            updatedList = prevState.selectedDishes.filter(dish => dish.item.id !== action.item.id);
        } else {
            updatedList = [...prevState.selectedDishes];
            updatedList.find(dish => dish.item.id === action.item.id).itemCount -= 1;
        }

        return {
            selectedDishes: updatedList,
            totalAmount: prevState.totalAmount - 1,
            totalPrice: prevState.totalPrice - +action.item.price
        }
    }
    return defaultCartState;
}

const DishProvider = ({children}) => {

    const [cartState, setCartState] = useReducer(cartReducer, defaultCartState);

    const addItem = (item) => {
        setCartState({...item, type: 'ADD'});
    };

    const removeItem = (item) => {
        setCartState({...item, type: 'REMOVE'});
    };

    const dishContext = {
        selectedDishes: cartState.selectedDishes,
        totalAmount: cartState.totalAmount,
        totalPrice: cartState.totalPrice,
        addItem: addItem,
        removeItem: removeItem
    };

    return (
        <DishesContext.Provider value={dishContext}>
            {children}
        </DishesContext.Provider>
    );
}

export default DishProvider;