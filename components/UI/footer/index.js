import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import style from './footer.less';

class Footer extends Component {
    render(){
        return(
            <footer>
                <div className={style.wrap}>
                    <div className={style.fHead}>
                        <div className={style.logo}>
                            <Link to='/'>
                                <img src={require('../../../static/img/logo_wb.png')} alt=""/>
                            </Link>
                        </div>
                        {/*<div className={style.social}>*/}
                            {/*<Link to='/'>*/}
                                {/*<img src={} alt=""/>*/}
                            {/*</Link>*/}
                        {/*</div>*/}
                    </div>
                    <div className={style.categories}>
                        <ul className={style.list}>
                            <li>
                                <span>Помощь</span>
                                <ul className={style.subList}>
                                    <li>
                                        <Link to='/some_category'>
                                            Some Category
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span>StockPages</span>
                                <ul className={style.subList}>
                                    <li>
                                        <Link to='/some_category'>
                                            Some Category
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span>Правовая информация</span>
                                <ul className={style.subList}>
                                    <li>
                                        <Link to='/some_category'>
                                            Some Category
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span>Контакты</span>
                                <ul className={style.subList}>
                                    <li>
                                        <Link to='/some_category'>
                                            Some Category
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className={style.copyright}>
                        <p>&copy;  StockPages, Inc. Все права защищены. Сделано во Львове.</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;