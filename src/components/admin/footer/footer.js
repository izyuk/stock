import React, { Component } from 'react';

import style from './footer.less';

class Footer extends Component{
	render(){
		return(
			<footer>
				<div className={style.logo}>
					<img src={require('../../../static/img/logo_wb.png')} alt="" />
				</div>
				<div className={style.copyText}>
					<p>
						&copy; StockPages Inc. All rights reserved. Made in Lviv, Ukraine
					</p>
				</div>
			</footer>
			)
	}
}

export default Footer;