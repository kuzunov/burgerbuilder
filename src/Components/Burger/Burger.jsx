import React, {useContext} from 'react'
import {BurgerBuilderContext} from '../BurgerBuilder/BurgerBuilder'
const Burger = () => {

  /* */

       const {ingredients,setIngredients} = useContext(BurgerBuilderContext);
       console.log(ingredients)
  return (
    <ul>
       {ingredients.map(ingredient => {
           return <li>{ingredient.name}
                  <button onClick={()=>{setIngredients([...ingredients,ingredient])}}>{'Remove'+ingredient.name}</button>
                  </li>
       })}
    </ul>
  )
}

export default Burger