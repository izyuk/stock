import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import style from './header.less';
import UserBar from './userBar';

class Header extends Component {
    render(){
        return(
            <header className={style.adminWrap}>
                <div className={style.barWrap}>
                    <div className={style.pageInfo}>
                        <div className={style.logo}>
                            <Link to="/admin">
                                <img src={require('../../../static/img/logo.png')} alt=""/>
                            </Link>
                        </div>
                        <div className={style.pageName}>
                            <h3>Content management</h3>
                        </div>
                    </div>
                    <UserBar/>
                </div>
            </header>
        )
    }
}

export default Header;