import React, { Component } from 'react';

import style from './searchBar.less';

class Lang extends Component{
	render(){
		return(
				<div className={style.lang}>
					<span>LNG</span>
					<a href="#"
						className={style.active}>RU</a>
					<a href="#">UA</a>
					<a href="#">EN</a>
					<a href="#">DE</a>
				</div>
			)
	}
}

export default Lang;
