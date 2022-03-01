import React, {Context, useState,useContext} from 'react';
import Burger from '../Burger/Burger';
import Cart from '../Cart/Cart' 
export const CartContext = React.createContext();
const BurgerBuilder = () => {
    const [cartState,setCart] = useState([
        ]);

    return ( <>
    <CartContext.Provider value={[cartState,setCart]}>
            <Cart />
            <Burger />
            </CartContext.Provider>
            </>);
}
export default BurgerBuilder;
