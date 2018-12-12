import React, {Component} from 'react';
import style from '../homeContent/homeContent.less';

import {Link} from 'react-router-dom';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: ''
        }
    }

    componentDidMount() {
        const categories = window.location.pathname === '/categories';
        if (categories){
            this.setState({
                categories: categories
            })
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.categories !== nextState.categories){
            return true
        } else {
            return false
        }
    }

    componentDidUpdate(){
        console.log('updated', this.state.categories);
    }


    render() {
        const categories = window.location.pathname === '/categories';
        console.log(categories);
        return (
            <div className={style.wrap}>
                <div className={style.categoriesWrap}>
                    <h3>Самые популярные категории спортивных видео</h3>
                    <div className={style.list}>
                        <div className={this.state.categories ? [style.item, style.cat].join(' ') : style.item}>
                            <Link to='/football'>
                                <span className={this.state.categories ? style.catName : ''}>Футбол</span>
                                <img src={require('../../../static/img/football.png')} alt=""/>
                            </Link>
                        </div>
                        <div className={this.state.categories ? [style.item, style.cat].join(' ') : style.item}>
                            <Link to='/football'>
                                <span className={this.state.categories ? style.catName : ''}>Футбол</span>
                                <img src={require('../../../static/img/football.png')} alt=""/>
                            </Link>
                        </div>
                        <div className={this.state.categories ? [style.item, style.cat].join(' ') : style.item}>
                            <Link to='/football'>
                                <span className={this.state.categories ? style.catName : ''}>Футбол</span>
                                <img src={require('../../../static/img/football.png')} alt=""/>
                            </Link>
                        </div>
                        <div className={this.state.categories ? [style.item, style.cat].join(' ') : style.item}>
                            <Link to='/football'>
                                <span className={this.state.categories ? style.catName : ''}>Футбол</span>
                                <img src={require('../../../static/img/football.png')} alt=""/>
                            </Link>
                        </div>
                        <div className={this.state.categories ? [style.item, style.cat].join(' ') : style.item}>
                            <Link to='/football'>
                                <span className={this.state.categories ? style.catName : ''}>Футбол</span>
                                <img src={require('../../../static/img/football.png')} alt=""/>
                            </Link>
                        </div>
                        <div className={this.state.categories ? [style.item, style.cat].join(' ') : style.item}>
                            <Link to='/football'>
                                <span className={this.state.categories ? style.catName : ''}>Футбол</span>
                                <img src={require('../../../static/img/football.png')} alt=""/>
                            </Link>
                        </div>
                        <div className={this.state.categories ? [style.item, style.cat].join(' ') : style.item}>
                            <Link to='/football'>
                                <span className={this.state.categories ? style.catName : ''}>Футбол</span>
                                <img src={require('../../../static/img/football.png')} alt=""/>
                            </Link>
                        </div>
                        <div className={this.state.categories ? [style.item, style.cat].join(' ') : style.item}>
                            <Link to='/football'>
                                <span className={this.state.categories ? style.catName : ''}>Футбол</span>
                                <img src={require('../../../static/img/football.png')} alt=""/>
                            </Link>
                        </div>
                        <div className={this.state.categories ? [style.item, style.cat].join(' ') : style.item}>
                            <Link to='/football'>
                                <span className={this.state.categories ? style.catName : ''}>Футбол</span>
                                <img src={require('../../../static/img/football.png')} alt=""/>
                            </Link>
                        </div>
                        <div className={this.state.categories ? [style.item, style.cat].join(' ') : style.item}>
                            <Link to='/football'>
                                <span className={this.state.categories ? style.catName : ''}>Футбол</span>
                                <img src={require('../../../static/img/football.png')} alt=""/>
                            </Link>
                        </div>
                        <div className={this.state.categories ? [style.item, style.cat].join(' ') : style.item}>
                            <Link to='/football'>
                                <span className={this.state.categories ? style.catName : ''}>Футбол</span>
                                <img src={require('../../../static/img/football.png')} alt=""/>
                            </Link>
                        </div>
                        <div className={this.state.categories ? [style.item, style.cat].join(' ') : style.item}>
                            <Link to='/football'>
                                <span className={this.state.categories ? style.catName : ''}>Футбол</span>
                                <img src={require('../../../static/img/football.png')} alt=""/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories;