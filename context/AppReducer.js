export default ( state, action ) => {
    switch(action.type) {
        case 'DELETE_ORDER_ITEM':
            return {
                ...state,
                orderItems: state.orderItems.filter(
                    item => item.no !== action.payload
                )
            }
        case 'ADD_ORDER_ITEM':
            return {
                ...state,
                orderItems: [ action.payload, ...state.orderItems]
            }
        case 'CLEAR_ORDER_ITEMS':
            return {
                ...state,
                orderItems: []
            }
        case 'ADD_ITEM':
            return {
                ...state,
                items: [ action.payload, ...state.items]
            }
        case 'DELETE_ITEM':
            return {
                ...state,
                items: state.orderItems.filter(
                    item => item.id !== action.payload
                )
            }
        case 'ADD_SALE':
            return {
                ...state,
                sales: [ action.payload, ...state.sales]
            }
        default:
            return state;
    }
}