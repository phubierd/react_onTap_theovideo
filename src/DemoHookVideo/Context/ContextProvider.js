import React, { useReducer } from 'react'


export const context = React.createContext();

const initailCart = [
    // { id: '1', name: 'iphone', price: 1000, quantity: 1 }
]

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'addToCart': {
            let cartUpdate = [...state]

            let index = cartUpdate.findIndex(itemCart => itemCart.id === action.item.id);

            if (index !== -1) {
                cartUpdate[index].quantity += 1;
            } else {
                const itemCart = { ...action.item, quantity: 1 };
                cartUpdate.push(itemCart)
            }
            return cartUpdate
        }
    }

    return [...state]
}




export default function ContextProvider(props) {
    let [cart, dispatch] = useReducer(cartReducer, initailCart)


    //store gioosng nhuw rootReducer
    const store = {
        cartReducer: [cart, dispatch],


    }
    return (

        //dùng context bao bọc tất cả component bên trong (cụ thể là App)
        <context.Provider value={store}>
            {props.children}
        </context.Provider>
    )
}
