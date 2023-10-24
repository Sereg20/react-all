import React from "react"

const DishesContext = React.createContext({
    selectedDishes: [],
    totalAmount: 0,
    totalPrice: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default DishesContext;