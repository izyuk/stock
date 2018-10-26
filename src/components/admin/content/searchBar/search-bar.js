import React, { Component } from 'react';

import Search from './search';
import UploadCSV from './uploadCSV';
import Lang from './lang';
import style from './searchBar.less';

class SearchBar extends Component{
	render(){
		return(
				<div className={style.searchRow}>
					<Search />
					<UploadCSV />
					<Lang />
				</div>
			)
	}
}

export default SearchBar;