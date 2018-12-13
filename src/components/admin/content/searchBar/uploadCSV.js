import React, { Component } from 'react';

import style from './searchBar.less';

class UploadCSV extends Component{
	render(){
		return(
				<div className={style.uploadCSV}>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80px" height="40px" viewBox="0 0 80 40" enableBackground="new 0 0 80 40">
						<rect fill="#0B65B1" width="80" height="40"/>
						<path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M31.086,20.761l8.156,7.183c0.115,0.104,0.342,0.104,0.4,0
							l8.213-7.183c0.114-0.104,0.114-0.26,0-0.417l-1.429-1.304l-5.87,5.098V9.094c0-0.625-0.572-1.094-1.2-1.094
							c-0.629,0-1.203,0.47-1.203,1.094v14.888l-5.641-4.942l-1.427,1.304C30.971,20.5,30.971,20.657,31.086,20.761z"/>
						<rect x="31.085" y="29.771" fill="#FFFFFF" width="17.221" height="2.229"/>
					</svg>
					<p>Загрузить теги   -   CSV</p>
				</div>
			)
	}
}

export default UploadCSV;
