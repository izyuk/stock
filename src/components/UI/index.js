import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {Api} from '../../api/API';

import style from './style.less';

import Main from './pages/main';
import Categories from './pages/categories';
import Search from './pages/search';
import Admin from "../admin";


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: ''
        };
    }

    render() {
        return (
            <div className={style.mainWrap}>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route exact path='/search/:tag' component={Search}/>
                    <Route exact path='/categories/:name' component={Categories}/>
                    <Route exact path='/admin/:page' component={Admin}/>
                </Switch>
            </div>
        );
    }
}

// export default Index;
export default connect(
    state => ({
        categories: state.categories
    }),
    dispatch => ({
        updatePagesFunction: (categories) => {
            dispatch({type: "UPDATE_PAGE_LIST", payload: categories})
        }
    })
)(Index)
