import React from 'react';


const ingredientsList = [ 
'topBun',
'lettuce',
'tomato',
'cheese',
'pickle',
'botBun',
];

const IngredientList = ({addIngredient}) => {
  return ( <>
          {ingredientsList.map(ingredient => {
            return <div key={ingredient}>{ingredient}
            <button onClick={
              () => {addIngredient(ingredient)}
            }>Add {ingredient}</button>

            </div>
          })
        }
  </>
  )
}

export default IngredientList