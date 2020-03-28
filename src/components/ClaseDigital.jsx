import React, { Component } from 'react';

class ClaseDigital extends Component{


constructor (props){
	super(props);
	this.state= { 
		Elena: 'Pehjjjjjro debo conectarme en classroom'
		}
	}

render(){
	return (
		<h1> {this.state.Elena}</h1>
		)
}};
export default ClaseDigital; 