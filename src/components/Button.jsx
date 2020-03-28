//destructurar datos 

//importamos react 

 import React from 'react';

 /*declaramos count y el arrayrecibe todo tipo de estados, se accede a el cuando se inicializa acutializando losestados */
 class Button extends React.Component{

 	state={
 	count:0,
 	}

 	handlerClick = () => {
 	this.setState({
 	count: this.state.count + 1
 	})
 	}

 /*declaramos nuestra variable const y nuestro html siempre va en render*/

 render(){
 const{count} = this.state;
 	return(
 	<div>
 	<h1> Duraznos: {count}</h1>
 	<button type="button" onClick= {this.handlerClick}>Contar</button>
 	</div>

 		) 
 	}

 }

 export default Button;
