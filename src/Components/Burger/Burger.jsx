import React, {useContext} from 'react'
import {BurgerBuilderContext} from '../BurgerBuilder/BurgerBuilder'
import classes from './Burger.css'
const Burger = () => {

      const {state,setState} = useContext(BurgerBuilderContext);
  return (
    <>
       {state.map((ingredient,i) => {
           return <div className = {ingredient} key={i}>{ingredient}
                  <button onClick={ () => {              
                      setState([...state].filter((_, curi) => curi !== i))
                      }

                    }>{'Remove this '+ingredient}</button>
                  </div>
       })}
       <button onClick = {()=>{setState([])}}>START OVER?</button>
    </>
  )
}

export default Burger