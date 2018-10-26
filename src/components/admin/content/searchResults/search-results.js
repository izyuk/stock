import React, { Component } from 'react';

import style from './searchResults.less';
import Thead from './thead';
import Tbody from './tbody';

class SearchResults extends Component {
	render(){
		return(
			<section className={style.searchResultsWrap}>
			<h3>Результаты поиска фотографий и видео по запросу «Футбол»</h3>
				<table rules="rows">
					<Thead/>
					<Tbody/>
				</table>
			</section>
			)
	}
}

export default SearchResults;