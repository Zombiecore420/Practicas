import React, {Children} from 'react';
import '../assets/style/categoria.scss';

const Categoria = ({children}) => (

	<div className="categories">

		<h3 class="categories_title">Mi Lista</h3>
		{children}

	</div>


)

export default Categoria;