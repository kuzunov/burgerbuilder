import React,{useContext}from 'react'
import Burger from '../Burger/Burger'
import { CartContext } from '../BurgerBuilder/BurgerBuilder';

const Cart = () => {
    const [cartState, setCart] = useContext(CartContext);
    
    const removeFromCart = (idToRemove) => {
        setCart([...cartState].filter(
                                        (el) => { return el.burgerId!=idToRemove}
                                    )
                )
    }
 return (
 <>
 <h1> CART</h1>
  {  
    
     cartState.map(burger => {
       return <div>
            <Burger renderBurger={burger} /> 
            <button onClick = {() => removeFromCart(burger.burgerId)}>Remove this from cart</button>
            </div>
  })}
 </>

 );
}
export default Cart;