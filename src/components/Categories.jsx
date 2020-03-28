import React, {Children} from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({children}) => (

	<div className="categories">

		<h3 class="categories_title">Mi Lista</h3>
		{children}

	</div>


)

export default Categories;