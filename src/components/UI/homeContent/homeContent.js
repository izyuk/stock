import React, { Component } from 'react';
import style from './homeContent.less';
import {connect} from 'react-redux';

import Title from './title';
import RandomPosts from './randPosts';
import Categories from '../categories/categories';
import {Api} from "../../../api/API";

class HomeContent extends Component {
    constructor(props){
        super(props);
        this.state={
            categories: ''
        };
        this.query = this.query.bind(this);
    }

    async query() {
        let query = Api.getCats();
        await query.then(res => {
            let {data} = res.data;
            this.setState({
                categories: data
            });
            this.props.updatePagesFunction(this.state.categories);
        });
    }

    componentDidMount(){
        this.query();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.categories !== nextState.categories) {
            return true
        } else {
            return false
        }
    }

    componentDidUpdate() {
        console.log('Home Content component is Updated \n', this.state.categories);
    }

    render(){
        return (
            <div>
                <div className={style.wrap}>
                    <Title/>
                    <RandomPosts/>
                </div>
                <Categories list={this.state.categories}/>
            </div>
        )
    }
}

// export default HomeContent;

export default connect(
    state => ({
        categories: state.categories
    }),
    dispatch => ({
        updatePagesFunction: (categories) => {
            dispatch({type: "UPDATE_PAGE_LIST", payload: categories})
        }
    })
)(HomeContent)
