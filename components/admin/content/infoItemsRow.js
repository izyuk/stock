import React, { Component } from 'react';

import style from './content.less';

class InfoItemsRow extends Component{
	render(){
		return(
				<div className={style.infoItemsRow}>
					<div className={style.item}>
						<div className={style.icon}>
							<span>icon</span>
						</div>
						<div className={style.description}>
							<p className={style.name}>Videos</p>
							<p className={style.count}>Was uploaded 123</p>
						</div>
					</div>
					<div className={[style.item, style.tickets].join(' ')}>
						<div className={style.icon}>
							<span>icon</span>
						</div>
						<div className={style.description}>
							<p className={style.name}>Tickets</p>
							<p className={style.count}>Was uploaded 123</p>
						</div>
					</div>
				</div>
			)
	}
}

export default InfoItemsRow;