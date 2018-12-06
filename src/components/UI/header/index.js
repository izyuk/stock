import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import style from './header.less';

class Header extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <header className={style.coloredBlock}>
                <div className={style.wrap}>
                    <div className={style.bar}>
                        <div className={style.menu}>
                            {/*<a href="#">Фотографии</a>*/}
                            {/*<Link to="/photos"></Link>*/}
                            <Link to="/videos">Видео</Link>
                            {/*<Link to="/photos"></Link>*/}
                            {/*<a href="#">Видео</a>*/}
                            {/*<a href="#">Редакционные</a>*/}
                        </div>
                        <div className={style.langList}>
                            <div className={style.current}>
                                <a href="#">
                                    <img src="" alt=""/>
                                </a>
                            </div>
                            <div className={style.list}>
                                <a href="#">
                                    <img src="" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
