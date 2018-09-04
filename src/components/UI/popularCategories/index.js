import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import style from './popularCategories.less';

class PopularCategories extends Component{
    render(){
        return(
            <div className={style.wrap}>
                <div className={style.catsListWrap}>
                    <h3>Популярные категории видеобанка:</h3>
                    <ul>
                        <li>
                            <Link to='/football'>
                                Футбол
                            </Link>
                        </li>
                        <li>
                            <Link to='/football'>
                                Футбол
                            </Link>
                        </li>
                        <li>
                            <Link to='/football'>
                                Футбол
                            </Link>
                        </li>
                        <li>
                            <Link to='/football'>
                                Футбол
                            </Link>
                        </li>
                        <li>
                            <Link to='/football'>
                                Футбол
                            </Link>
                        </li>
                        <li>
                            <Link to='/football'>
                                Футбол
                            </Link>
                        </li>
                        <li>
                            <Link to='/football'>
                                Футбол
                            </Link>
                        </li>
                        <li>
                            <Link to='/football'>
                                Футбол
                            </Link>
                        </li>
                        <li>
                            <Link to='/football'>
                                Футбол
                            </Link>
                        </li>
                        <li>
                            <Link to='/football'>
                                Футбол
                            </Link>
                        </li>
                        <li>
                            <Link to='/football'>
                                Футбол
                            </Link>
                        </li>
                        <li>
                            <Link to='/football'>
                                Футбол
                            </Link>
                        </li>
                        <li>
                            <Link to='/football'>
                                Футбол
                            </Link>
                        </li>
                        <li>
                            <Link to='/football'>
                                Футбол
                            </Link>
                        </li>
                        <li>
                            <Link to='/football'>
                                Футбол
                            </Link>
                        </li>
                        <li>
                            <Link to='/football'>
                                Футбол
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default PopularCategories;