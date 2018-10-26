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
							<p className={style.name}>Видео</p>
							<p className={style.count}>Загружено новых: 12</p>
						</div>
					</div>
					<div className={[style.item, style.tickets].join(' ')}>
						<div className={style.icon}>
							<span>icon</span>
						</div>
						<div className={style.description}>
							<p className={style.name}>Тикеты</p>
							<p className={style.count}>Открытых тикетов: 0</p>
						</div>
					</div>
				</div>
			)
	}
}

export default InfoItemsRow;