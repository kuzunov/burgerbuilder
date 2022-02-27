import React, {useState} from 'react';
import Burger from '../Burger/Burger';
import IngredientList from '../IngredientsList/IngredientList';
export const BurgerBuilderContext = React.createContext();
const BurgerBuilder = () => {
    const [ingredients,setIngredients] = useState({
        ingredients: [
            {   
            id:0,
            name:"topBun"
        },
        {
            id:1,
            name:"botBun"
        },],
})
    return (
        <>
        <BurgerBuilderContext.Provider value={ingredients}>
            <Burger />
            <IngredientList />
        </BurgerBuilderContext.Provider>
        </>
    );
}
export default BurgerBuilder;
