import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import style from './searchResults.less';
import Thead from './thead';
import Tbody from './tbody';

class SearchResults extends Component {
	render(){
		return(
			<section className={style.searchResultsWrap}>
			<h3>Результаты поиска фотографий и видео по запросу «Футбол»</h3>
				<Link to="admin/panel/multi-edit"><p className={style.multiEdit}><span>icon</span>Групповое редактирование</p></Link>
                <Thead/>
				<Tbody/>
			</section>
			)
	}
}

export default SearchResults;
