import React,{useContext} from 'react';
import { Button } from '../Button/Button';
import {AddIngredient, RemoveIngredient} from './ChangeBurger';
import {BurgerBuilderContext} from '../BurgerBuilder/BurgerBuilder'


const ingredientsList = [ {id:'l',name:'lettuce'},
{id:'t', name:'tomato'},
{id:'c',name:'cheese'},
{id:'p',name:'pickle'},
];

const IngredientList = () => {
const {ingredients,setIngredients} = useContext(BurgerBuilderContext); 
  return (
    <><ul>
        {ingredientsList.map(ingredient => (
            <li key={ingredient.id}>{ingredient.name}
                <Button text='Add' onClick={() => {}}></Button>
            </li>
            ))}
            
    </ul>
     </>
  )
}

export default IngredientList