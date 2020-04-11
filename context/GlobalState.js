import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    questions: [
        {no: 1, question: 'Do you have cough?',value: 1},
        {no: 2, question: 'Do you have colds?',value: 1},
        {no: 3, question: 'Are you having Diarrhea?',value: 1},
        {no: 4, question: 'Do you have sore throat?',value: 1},
        {no: 5, question: 'Are you experiencing MYALGIA or Body Aches?',value: 1},
        {no: 6, question: 'Do you have a headache',value: 1},
        {no: 7, question: 'Do you have fever (Temperature 37.8 C and above?',value: 1},
        {no: 8, question: 'Are you having difficulty breathing?',value: 1},
        {no: 9, question: 'Are you experiencing fatigue',value: 2},
        {no: 10, question: 'Have you travelled recently during the past 14 days?',value: 2},
        {no: 11, question: 'Do you have a travel history to COVID-19 INFFECTED AREA?',value: 3},
        {no: 12, question: 'Do you have direct contact or is taking care of a positive COVID-19 PATIENT?',value: 3},
        {no: 13, question: 'Do you have cough?',value: 3},
    ],
    // result:
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
                questions: state.questions,

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