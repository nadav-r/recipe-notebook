import React from 'react';
import Recipe from './Recipe';

const RecipesList = ({recipes, deleteRecipe}) =>{
	const recipe = recipes.map((item,i) => {
		return(<div key={Math.random()}>
					<Recipe 
						key = {i}
						name = {recipes[i].name}
						ingredients = {recipes[i].ingredients}
						process={recipes[i].process}
						deleteRecipe={deleteRecipe}
					/>
				</div>
			);
	});

	return recipe;
};

export default RecipesList;