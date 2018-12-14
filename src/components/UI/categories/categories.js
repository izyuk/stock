import React, {Component} from 'react';
import style from '../homeContent/homeContent.less';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: ''
        }
    }

    componentDidMount() {
        console.log('Categories are mounted \n', this.props.list);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.list !== nextProps.list) {
            return true
        }
        if (this.state.categories !== nextState.categories) {
            return true
        }
        else {
            return false
        }
    }

    componentDidUpdate() {

    }


    render() {
        let data = this.props.list && this.props.list;
        console.log(data);
        console.log(window.location.pathname);
        return (
            <div className={style.wrap}>
                <div className={style.categoriesWrap}>
                    <h3>Самые популярные категории спортивных видео</h3>

                    <div className={style.list}>
                        {
                            !data ? <h1>Please wait</h1>
                                :
                                Array.from(data).map((element, i) => {
                                    console.log(element.level);
                                    console.log(window.location.pathname.split('/')[1] !== 'categories');
                                    if (window.location.pathname === '/' && element.level === 0) {
                                        console.log(element);
                                        return (
                                            <div className={style.item} key={i}>
                                                <Link to={`categories/${element.slug}`}>
                                                    <span>{element.title}</span>
                                                    <img src={require('../../../static/img/football.png')} alt=""/>
                                                </Link>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div
                                                className={[style.item, style.cat].join(' ')} key={i}>
                                                <Link to={`/search/${element.slug}`}>
                                                    <span
                                                        className={style.catName}>{element.title}</span>
                                                    <img src={require('../../../static/img/football.png')} alt=""/>
                                                </Link>
                                            </div>
                                        )
                                    }
                                })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        page_info: state.page_info
    })
)(Categories);
