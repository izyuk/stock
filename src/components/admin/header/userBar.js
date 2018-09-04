import React, {Component} from 'react';

import style from './header.less';

class UserBar extends Component {
    render() {
        return (
            <div className={style.userBar}>
                <div className={style.innerWrap}>
                    <div className={style.user}>
                        <div className={style.avatar}>
                            <img src={require('../../../static/img/mobile_people_icon.png')} alt=""/>
                        </div>
                        <div className={style.userName}>
                            <p>Имя Фамилия</p>
                        </div>
                    </div>
                    <span className={style.span1}>
                        <a href="#">Тикеты</a>
                    </span>
                    <span className={style.span2}>
                        <a href="#">Выход</a>
                    </span>
                </div>
            </div>
        )
    }
}

export default UserBar;