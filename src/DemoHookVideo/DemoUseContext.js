import React, { useContext } from 'react'
import { context } from './Context/ContextProvider'

export default function DemoUseContext() {

    // let store = useContext(context);
    // console.log(store)
    // let cartReducer = store.cartReducer
    let { cartReducer } = useContext(context)

    let [cart, dispatch] = cartReducer
    // console.log('cart',cart)
    // console.log('cartReducer',cartReducer)


    let arrProduct = [
        { id: 1, name: "iphone", price: 1000 },
        { id: 2, name: "note10", price: 1000 },
        { id: 3, name: "iphone3", price: 1000 },

    ];
    const addToCart = (itemClick) => {
        let action = {
            type: 'addToCart',
            item: itemClick
        }
        dispatch(action)
    }
    //giỏ hàng
    return (
        <div className="container">
            <div className="row">
                {arrProduct.map((item, index) => {
                    return <div className="col-4" key={index}>
                        <div className="card text-white bg-primary">
                            <img className="card-img-top" src="https://picsum.photos/200/200" alt />
                            <div className="card-body">
                                <h4 className="card-title">{item.name}</h4>
                                <p className="card-text">{item.price}</p>
                                <button className="btn btn-info" onClick={() => { addToCart(item) }}>Add to Cart</button>
                            </div>
                        </div>

                    </div>
                })}
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item,index)=>{
                        return <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.quantity * item.price}</td>
                            <td><button className="btn btn-danger">X</button></td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}

