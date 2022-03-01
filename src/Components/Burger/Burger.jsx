import React, {useContext,useState} from 'react'
import IngredientList from '../IngredientsList/IngredientList'
import classes from './Burger.css'
import { CartContext } from '../BurgerBuilder/BurgerBuilder'

const Burger = (props) => {

//use cartcontext
  const [cartState,setCart] = useContext(CartContext);
//innit currBurger state
  const [burgerState, setBurgerState] = useState(
     {burgerId:0,ingredients: []}
  );

      //store type of burger rendering here
      let render;
      //for cart burgers
      const renderCartBurgers = (burgerToRender) => {
       return  (
        <>
            {burgerToRender.ingredients.map(ingredient => {
              return <div>{ingredient}</div>
            })}
        </>)
        
      }

    //add to cart funct
    const addToCart = (burger) => {
      console.log(burger)
        setCart([...cartState].concat([burger]));
    }
    //for current burgers
      const renderBurgerIngredients = ()=>{
        return ( <>
        {
          burgerState.ingredients.map((ingredient,i)=>{
          return <div className={ingredient}> {ingredient} 
                    <button onClick={ () => {
                    setBurgerState(
                      {burgerId:burgerState.burgerId,
                      ingredients: [...burgerState.ingredients].filter((_, curi) => curi !== i)})
                  }
              }>{'Remove this '+ingredient}
              </button>
          </div>
          })
          }
          <button onClick={ () => {
            addToCart({burgerId: cartState.length, ingredients: burgerState.ingredients});
            setBurgerState({ingredients:[]})}}>Add to cart</button>
          <IngredientList addIngredient = { (ingredientToAdd) => { 
            setBurgerState({burgerId: burgerState.burgerId,
            ingredients:[...burgerState.ingredients].concat([ingredientToAdd])})
          } }/>
        </> )
      }
      
      //check which type of burger to render
      if (props.renderBurger) {render = renderCartBurgers(props.renderBurger)}
       else {render = renderBurgerIngredients()}

  return render;
}

export default Burger