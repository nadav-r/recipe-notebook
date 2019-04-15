import './Recipe.css';
import React, { Component } from 'react';

class Recipe extends Component {
	state = {showing:false}; 
	handleDelete=(e)=>{
		this.props.deleteRecipe(this.props.name);
	}
	
	formatList = (list)=>{
		console.log(list);
		return list.map((item,i)=>{
			return (
					<li key={i}> {item} </li>
				);
		});
	}
	render(){
		
	const {showing} = this.state;

	const toggleRecipe = ()=>{
			this.setState({showing:!showing});
		};
	

		
	
	/*const ingredients = this.props.ingredients.map((item,i)=>{
			return (
				<li key={i}>{this.props.ingredients[i]}</li>
				);
			});	
	const stages = this.props.process.map((stage,i)=>{
		return(
				<li key={i}>{this.props.process[i]}</li>
			)
	});*/

		return (
			<div>
				<h2><a className='list-group-item recipe' onClick={toggleRecipe}>{this.props.name}</a></h2>
				{showing ?
					<div className='list-group-item' >
						<p><strong>ingredients: </strong></p>
						<ul>{this.formatList(this.props.ingredients)}</ul>
						<p><strong>Stages: </strong></p>
						<ol>{this.formatList(this.props.process)}</ol>
						<button onClick={this.handleDelete}>delete</button>
					</div>
						:
						null
				}
			</div>
		);
	}

};


export default Recipe;