import React, { Component } from 'react';

import style from './searchResults.less';

class SearchResults extends Component {
	render(){
		return(
			<section className={style.searchResultsWrap}>
			<h3>Videos search results</h3>
				<table rules="rows">
					<thead>
						<tr>
							<th className={style.allFilter}>
								<select name="" id="">
									<option value="1" 
											defaultValue>All</option>
									<option value="2">Not all</option>
								</select>
							</th>
							<th>
								<select name="" id="">
									<option value="1" 
											defaultValue>Status</option>
									<option value="2">Status 2</option>
								</select>
							</th>
							<th className={style.preveiw}>
								<label htmlFor="preveiw">
									Preveiw
									<input id="preveiw" type="checkbox" />
								</label>
							</th>
							<th>
								ID code
							</th>
							<th>
								M-release
							</th>
							<th className={style.name}>
								Name
							</th>
							<th className={style.release}>
								<select name="" id="">
									<option value="1" defaultValue>Release</option>
									<option value="2">Not release</option>
								</select>
							</th>
							<th>
								LNG
							</th>
							<th>
								<select name="" id="">
									<option value="1" defaultValue>Category</option>
									<option value="2">Not category</option>
								</select>
							</th>
							<th>
								<select name="" id="">
									<option value="1" defaultValue>Uploaded</option>
								</select>
							</th>
							<th>
								<select name="" id="">
									<option value="1" defaultValue>Publicated</option>
								</select>
							</th>
							<th>
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className={style.allFilter}>
								ico
							</td>
							<td>
								ico
							</td>
							<td className={style.preveiw}>
								<img src={require('../../../../static/img/rand1.png')} alt="" />
							</td>
							<td>9999999999</td>
							<td>-----</td>
							<td className={style.name}>-----</td>
							<td className={style.release}>Football World championship 2018</td>
							<td className={style.lng}>
								<span className={style.isset}>RU</span>
								<span>UA</span>
								<span>EN</span>
								<span>DE</span>
							</td>
							<td>------</td>
							<td>17-07-2018</td>
							<td>17-07-2018</td>
							<td>Publicated</td>
						</tr>
					</tbody>
				</table>
			</section>
			)
	}
}

export default SearchResults;