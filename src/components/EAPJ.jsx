import React, { Component } from 'react';

class EAPJ extends Component{


constructor (props){
	super(props);
	this.state= { 
		Elena: 'Me voy'
		}
	}

render(){
	return (

		<h1> {this.state.Elena}</h1>
		)
}};
export default EAPJ; 