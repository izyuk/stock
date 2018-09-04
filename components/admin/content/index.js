import React, { Component } from 'react';

import InfoItemsRow from './infoItemsRow';
import SearchBar from './searchBar/index';
import SearchResults from './searchResults/index';
import style from './content.less';

class Content extends Component {
	render(){
		return(
			<section className={style.contentWrap}>
				<InfoItemsRow />
				<SearchBar />
				<SearchResults />
			</section>
			)
	}
}

export default Content;