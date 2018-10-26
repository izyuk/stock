import React, { Component } from 'react';

import InfoItemsRow from './infoItemsRow';
import SearchBar from './searchBar/search-bar';
import SearchResults from './searchResults/search-results';
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