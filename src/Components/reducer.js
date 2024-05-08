export const initialState = {
    cart: [],
    user: null
}

function reducer(state, action) {
    console.log(state)
    switch(action.type) {
        case 'ADD_TO_CART':
            //Logic for adding item to cart
            return {
                ...state, 
                cart: [...state.cart, action.item]
            }
        case 'REMOVE_FROM_CART':
            // Logic for Removing item from cart
            break;
        default:
            return state;
    }
}

export default reducer;