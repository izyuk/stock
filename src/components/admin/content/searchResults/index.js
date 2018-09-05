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
							<th className={style.preview}>
								<label htmlFor="preview">
									preview
									<input id="preview" type="checkbox" />
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
							<td className={style.preview}>
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
               {/* <div className="table">
                    <div className="th">
                        <div className="thr">
                            <div className="tHeadRowCell">
                                <select name="" id="">
                                    <option value="1"
                                            defaultValue>All</option>
                                    <option value="2">Not all</option>
                                </select>
							</div>
                            <div className="tHeadRowCell">
                                <select name="" id="">
                                    <option value="1"
                                            defaultValue>Status</option>
                                    <option value="2">Status 2</option>
                                </select>
							</div>
                            <div className="tHeadRowCell">
                                <label htmlFor="preview">
                                    preview
                                    <input id="preview" type="checkbox" />
                                </label>
							</div>
                            <div className="tHeadRowCell">
								<p>ID code</p>
							</div>
                            <div className="tHeadRowCell">
								<p>M-release</p>
							</div>
                            <div className="tHeadRowCell">
								<p>Name</p>
							</div>
                            <div className="tHeadRowCell">
                                <select name="" id="">
                                    <option value="1" defaultValue>Release</option>
                                    <option value="2">Not release</option>
                                </select>
							</div>
                            <div className="tHeadRowCell">
								<p>
                                    LNG
								</p>
							</div>
                            <div className="tHeadRowCell">
                                <select name="" id="">
                                    <option value="1" defaultValue>Category</option>
                                    <option value="2">Not category</option>
                                </select>
							</div>
                            <div className="tHeadRowCell">
                                <select name="" id="">
                                    <option value="1" defaultValue>Uploaded</option>
                                </select>
							</div>
                            <div className="tHeadRowCell">
                                <select name="" id="">
                                    <option value="1" defaultValue>Publicated</option>
                                </select>
							</div>
                            <div className="tHeadRowCell">
								<p>Action</p>
							</div>
                        </div>
                    </div>
                    <div className="tb">
                        <div className="tbr">
                            <div className="tBodyRowCell">
								<p>ico</p>
							</div>
                            <div className="tBodyRowCell">
								<p>ico</p>
							</div>
                            <div className="tBodyRowCell">
                                <img src={require('../../../../static/img/rand1.png')} alt="" />
							</div>
                            <div className="tBodyRowCell">
								<p>9999999999</p>
							</div>
                            <div className="tBodyRowCell">
								<p>-----</p>
							</div>
                            <div className="tBodyRowCell">
                                <p>-----</p>
							</div>
                            <div className="tBodyRowCell">
								<p>Football World championship 2018</p>
							</div>
                            <div className="tBodyRowCell">
                                <span className={style.isset}>RU</span>
                                <span>UA</span>
                                <span>EN</span>
                                <span>DE</span>
							</div>
                            <div className="tBodyRowCell">
                                <p>-----</p>
							</div>
                            <div className="tBodyRowCell">
								<p>17-07-2018</p>
							</div>
                            <div className="tBodyRowCell">
                                <p>17-07-2018</p>
							</div>
                            <div className="tBodyRowCell">
								<p>Publicated</p>
							</div>
                        </div>
                    </div>
                </div>*/}
			</section>
			)
	}
}

export default SearchResults;