import React, {useState} from 'react';
import Burger from '../Burger/Burger';
import IngredientList from '../IngredientsList/IngredientList';
export const BurgerBuilderContext = React.createContext();
const BurgerBuilder = () => {
    const [state,setState] = useState(
        []
) 
    return (
        <>
        <BurgerBuilderContext.Provider value={{state,setState}}>
            <Burger />
            <IngredientList />
        </BurgerBuilderContext.Provider>
        </>
    );
}
export default BurgerBuilder;
