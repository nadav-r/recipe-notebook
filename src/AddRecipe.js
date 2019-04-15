import React, { Component } from 'react';

class AddRecipe extends Component{
	constructor(){
	    super();
	    this.state = {
	    	name: '',
	    	ingredients:'',
	    	process: '',
	    	showing:false,

	    };

	}

	handleChange = (e)=>{
		this.setState({
			[e.target.id] : e.target.value
		});		
	}

	handleSubmit =(e)=>{
		e.preventDefault();
		let ingredients = this.state.ingredients.split(',');
		//let delim =['\n', '.'];
		//let process= this.state.process.split(new RegExp(delim.join('|'),''));
		let process = this.state.process.split(/[(\n|.)]/g);
		let recipe ={
			name:this.state.name,
			ingredients:ingredients,
			process:process
		}
		this.props.addRecipe(recipe);
		this.clearFields();
		this.state.showing=false;
	}

	clearFields = ()=>{
		document.getElementById('name').value='';
		document.getElementById('ingredients').value='';
		document.getElementById('process').value='';
	}
	render(){

	const {showing} = this.state;

	const toggleAddRecipe = ()=>{
			this.setState({showing:!showing});
		};

		return (
			<div>
				<h4><button href="" className='list-group-item' onClick={toggleAddRecipe}>Add a new recipe...</button></h4>
				{showing?
					<form onSubmit ={this.handleSubmit}>
					  <div className="form-group">
					    <label htmlFor="name">Recipe Name</label>
					    <input type="text" className="form-control" onChange={this.handleChange} id="name" placeholder="Choclate Fudge"/>
					  </div>
					  <div className="form-group">
					    <label htmlFor="ingredients">Ingredients</label>
					    <input type="text" className="form-control" onChange={this.handleChange} id="ingredients" placeholder="Choclate, Butter"/>

					  </div>
					  	<div className="form-group">
					    <label htmlFor="process">Instructions</label>
					    <textarea rows='4' className="form-control" onChange={this.handleChange} id="process" placeholder={`Mix everything \nBake For 15 minutes\nLet it cool`}/>
					  </div>
					  <div>
					   <button type="submit"  className="btn btn-primary mb-2">Submit</button>
					  </div>
					</form>
					:
					null
				}
			</div>
		);
	}
}

export default AddRecipe;