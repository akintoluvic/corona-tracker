import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    orderItems: [],
    sales: [],
    items: [
        {item: "Rice", price: 532, id: 152},
        {item: "Copa-rice", price: 232, id: 1222},
        {item: "Meat", price: 432, id: 121},
        {item: "Chickee", price: 332, id: 122}
    ],
    goods: [],
    stock: [],
    priceList: [],
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children  }) => {
    const [ state, dispatch ] = useReducer(AppReducer, initialState);

    // Actions
    function deleteOrderItem(no) {
        dispatch({
            type: 'DELETE_ORDER_ITEM',
            payload: no
        });
    }
    function addOrderItem(item) {
        dispatch({
            type: 'ADD_ORDER_ITEM',
            payload: item
        });
    }
    function clearOrderItems() {
        dispatch({
            type: 'CLEAR_ORDER_ITEMS',
        });
    }
    function addSale(order) {
        dispatch({
            type: 'ADD_SALE',
            payload: order
        });
    }
    function deleteItem(id) {
        dispatch({
            type: 'DELETE_ITEM',
            payload: id
        });
    }
    function addItem(item) {
        dispatch({
            type: 'ADD_ITEM',
            payload: item
        });
    }

    return (
        <GlobalContext.Provider
            value={{ 
                items: state.items, 
                
                orderItems: state.orderItems, 
                deleteOrderItem,
                addOrderItem,
                clearOrderItems, 

                sales: state.sales,
                addSale,

                deleteItem,
                addItem,
            }}
        >
        { children }
        </GlobalContext.Provider>
    )
}