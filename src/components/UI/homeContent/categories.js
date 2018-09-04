import React, { Component } from 'react';
import style from './homeContent.less';

import { Link } from 'react-router-dom';

class Categories extends Component {
    render(){
        return(
            <div className={style.categoriesWrap}>
                <h3>Самые популярные категории спортивных видео</h3>
                <div className={style.list}>
                    <div className={style.item}>
                        <Link to='/football'>
                            <span>Футбол</span>
                            <img src={require('../../../static/img/football.png')} alt=""/>
                        </Link>
                    </div>
                    <div className={style.item}>
                        <Link to='/football'>
                            <span>Футбол</span>
                            <img src={require('../../../static/img/football.png')} alt=""/>
                        </Link>
                    </div>
                    <div className={style.item}>
                        <Link to='/football'>
                            <span>Футбол</span>
                            <img src={require('../../../static/img/football.png')} alt=""/>
                        </Link>
                    </div>
                    <div className={style.item}>
                        <Link to='/football'>
                            <span>Футбол</span>
                            <img src={require('../../../static/img/football.png')} alt=""/>
                        </Link>
                    </div>
                    <div className={style.item}>
                        <Link to='/football'>
                            <span>Футбол</span>
                            <img src={require('../../../static/img/football.png')} alt=""/>
                        </Link>
                    </div>
                    <div className={style.item}>
                        <Link to='/football'>
                            <span>Футбол</span>
                            <img src={require('../../../static/img/football.png')} alt=""/>
                        </Link>
                    </div>
                    <div className={style.item}>
                        <Link to='/football'>
                            <span>Футбол</span>
                            <img src={require('../../../static/img/football.png')} alt=""/>
                        </Link>
                    </div>
                    <div className={style.item}>
                        <Link to='/football'>
                            <span>Футбол</span>
                            <img src={require('../../../static/img/football.png')} alt=""/>
                        </Link>
                    </div>
                    <div className={style.item}>
                        <Link to='/football'>
                            <span>Футбол</span>
                            <img src={require('../../../static/img/football.png')} alt=""/>
                        </Link>
                    </div>
                    <div className={style.item}>
                        <Link to='/football'>
                            <span>Футбол</span>
                            <img src={require('../../../static/img/football.png')} alt=""/>
                        </Link>
                    </div>
                    <div className={style.item}>
                        <Link to='/football'>
                            <span>Футбол</span>
                            <img src={require('../../../static/img/football.png')} alt=""/>
                        </Link>
                    </div>
                    <div className={style.item}>
                        <Link to='/football'>
                            <span>Футбол</span>
                            <img src={require('../../../static/img/football.png')} alt=""/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories;