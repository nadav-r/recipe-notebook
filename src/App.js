import React, { Component } from 'react';
import RecipesList from './RecipesList' ;
import AddRecipe from './AddRecipe';
class App extends Component {
  constructor(){
    super();
    this.state ={
      recipes : [{name:'Rustic Bread', ingredients : ['white flour','water'],process: ['mix the ingredients','bake in the oven']},
                {name:'Brownies', ingredients : ['choclate','butter'],process: ['mix the ingredients','bake in the oven']}
                ],
      searchfield:''
   }; 
  }
  




  addRecipe = (recipe) =>{
    recipe.id = Math.random();
    let recipesUpdated = [...this.state.recipes,recipe];
    this.setState({
      recipes:recipesUpdated
    }); 
    
  }
  deleteRecipe = (recipeName)=>{
    let recipesUpdated = this.state.recipes.filter(recipe=>{return recipe.name!==recipeName});
    this.setState({
        recipes:recipesUpdated
      });
    
    }
  
  

  render() {
    
    return (
      <div className="container">
        <h1 className="text-dark text-center mt-3"  >My Recipe Notebook</h1>
        <div className = 'list-group'>
          <RecipesList recipes = {this.state.recipes} deleteRecipe={this.deleteRecipe}/>
        </div>
        <AddRecipe addRecipe={this.addRecipe}/>
      </div>
    );
  }
}

export default App;
