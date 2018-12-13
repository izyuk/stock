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
        this.query = this.query.bind(this);
    }

    async query() {
        let query = Api.getCats();

        await query.then(res => {
            let {data} = res.data;
            console.log(data);
            this.setState({
                categories: data
            });
        });
    }

    componentDidMount() {
        this.query();

    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.categories !== nextState.categories) {
            return true
        }
        else if (this.props.categories !== nextProps.categories) {
            return true
        } else {
            return false
        }
    }

    componentDidUpdate() {
        this.props.updatePagesFunction(this.state.categories);
    }

    render() {
        return (
            <div className={style.mainWrap}>
                <Switch>
                    <Route exact path="/" render={(props) => <Main categoryList={this.state.categories} {...props}/>}/>
                    <Route exact path='/search/:tag' component={Search}/>
                    <Route exact path='/categories/:name'
                           render={(props) => <Categories categoryList={this.state.categories} {...props}/>}/>
                    <Route exact path="/admin/:page" component={Admin}/>
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
