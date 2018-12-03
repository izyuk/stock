import React, {Component} from 'react';
import Lang from './searchBar/lang';

import style from './content.less';

class InfoItemsRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loacation: window.location.pathname
        }
    }

    componentDidUpdate() {
        console.log('updated', this.props.path)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.path !== nextState.path) {
            return (this.props.path !== nextState.path)
        }
    }

    render() {
        return (
            <div className={style.infoItemsRow}>
                <div className={style.item}>
                    <div className={style.icon}>
                        <span>icon</span>
                    </div>
                    <div className={style.description}>
                        {this.props.path === '/admin/panel' ?
                            <div>
                                <p className={style.name}>Видео</p>
                                <p className={style.count}>Загружено новых: 12</p>
                            </div>
                            : (this.props.path === '/admin/uploading') ?
                                <div>
                                    <p className={style.name}>Загрузка файлов</p>
                                </div>
                                : (this.props.path === '/admin/edit') ?
                                    <div>
                                        <p className={style.name}>Групповое редактирование</p>
                                    </div>
                                    : ''}

                    </div>
                </div>
                {this.props.path === '/admin/panel' ?
                    <div className={[style.item, style.tickets].join(' ')}>
                        <div className={style.icon}>
                            <span>icon</span>
                        </div>
                        <div className={style.description}>
                            <div>
                                <p className={style.name}>Тикеты</p>
                                <p className={style.count}>Открытых тикетов: 0</p>
                            </div>
                        </div>
                    </div>
                    : (this.props.path === '/admin/edit') ?
                        <div className={style.lang}>
                            <a href="#"
                               className={style.active}>RU</a>
                            <a href="#">UA</a>
                            <a href="#">EN</a>
                            <a href="#">DE</a>
                        </div>
                        : ''}
            </div>
        )
    }
}

export default InfoItemsRow;
