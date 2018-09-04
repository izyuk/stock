import React, { Component } from 'react';

import style from './searchBar.less';

class UploadCSV extends Component{
	render(){
		return(
				<div className={style.uploadCSV}>
					<span>icon</span>
					<p>Upload tags - CSV</p>
				</div>
			)
	}
}

export default UploadCSV;