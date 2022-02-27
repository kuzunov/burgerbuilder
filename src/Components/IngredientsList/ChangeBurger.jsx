import React, {useContext} from 'react'
import BurgerBuilderContext from '../BurgerBuilder/BurgerBuilderContext'

const AddIngredient = (id) => {
    const {ingredients,setIngredients} = useContext(BurgerBuilderContext);
    setIngredients([...ingredients,id])
}


const RemoveIngredient = (id) => {
    const {ingredients,setIngredients} = useContext(BurgerBuilderContext);
    setIngredients
}


export {AddIngredient, RemoveIngredient};

