import React,{useContext} from 'react';
import { Button } from '../Button/Button';
import {BurgerBuilderContext} from '../BurgerBuilder/BurgerBuilder'


const ingredientsList = [ 
'topBun',
'lettuce',
'tomato',
'cheese',
'pickle',
'botBun',
];

const IngredientList = () => {
const {state,setState} = useContext(BurgerBuilderContext); 
  return (
    <>
     {(state[0]!=='topBun')? <h2>Are you mad?! Start with a top BUN! <Button text='Add' onClick={() => {
                setState(['topBun'].concat([...state]))}}></Button></h2>:<p></p>}
    <ul>
        {
          ingredientsList.map(ingredient => {
            return <li key={ingredient}>{ingredient}
                <Button text='Add' onClick={() => {
                setState([...state].concat([ingredient]))}}></Button>
            </li>
        })}
            
    </ul>
    {(state[state.length-1]!=='botBun')? <h2>Maybe add a BotBun? <Button text='Add' onClick={() => {
                setState([...state].concat(['botBun']))}}></Button></h2>:<p></p>}
     </>
  )
}

export default IngredientList