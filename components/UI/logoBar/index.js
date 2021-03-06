import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import style from './logoBar.less';

class LogoBar extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className={style.coloredBlock}>
                <div className={style.wrap}>
                    <div className={style.bar}>
                        <Link to="/">
                            <span className={style.logo}>
                                <img src={require('../../../static/img/logo.png')} alt=""/>
                            </span>
                        </Link>
                        <div className={style.stateButtons}>
                            <div className={style.form}>
                                <a href="#" className={style.register}>Зарегистрироваться</a>
                                <Link to="/admin">
                                    <span>Admin</span>
                                </Link>
                                <a href="#" className={style.login}>Войти</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LogoBar;