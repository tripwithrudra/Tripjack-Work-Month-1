import React, { Component } from 'react'

class RecipeContainer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { recipes } = this.props;
        return (
            <div className="recipe">
                {
                    recipes.map((recipe, index) => (
                        <div key={index} className="recipe-card">
                            <h2>Recipe {index + 1}</h2>
                            <h3>{recipe.recipe.label}</h3>
                            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                            <p>Calories: {Math.round(recipe.recipe.calories)}</p>
                            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
                        </div>
                    ))
                }
            </div>
        )
    }
}
export default RecipeContainer;



// import React from 'react'

// function RecipeContainer({recipes}) {
//     return (
//         <div className="recipe">
//             {
//                 recipes.map((recipe, index) => (
//                     <div key={index} className="recipe-card">
//                         <h2>Recipe {index + 1}</h2>
//                         <h3>{recipe.recipe.label}</h3>
//                         <img src={recipe.recipe.image} alt={recipe.recipe.label} />
//                         <p>Calories: {Math.round(recipe.recipe.calories)}</p>
//                         <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }

// export default RecipeContainer
