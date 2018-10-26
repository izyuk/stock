import React, { Component } from 'react';

import style from './searchBar.less';

class Search extends Component{
	render(){
		return(
				<div className={style.search}>
					<span>icon</span>
					<input type="text" 
						placeholder="Футбол" />
				</div>
			)
	}
}

export default Search;