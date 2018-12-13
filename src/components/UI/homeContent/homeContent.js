import React, { Component } from 'react';
import style from './homeContent.less';
import {connect} from 'react-redux';

import Title from './title';
import RandomPosts from './randPosts';
import Categories from '../categories/categories';

class HomeContent extends Component {
    constructor(props){
        super(props);
        this.state={
            categoriesList: ''
        }
    }
    componentDidMount(){
        console.log(this.props.categories.pages);
        this.setState({
            categoriesList: this.props.categories.pages
        });
        this.props.categories.pages && this.props.categories.pages ? console.log('qweqwe') : console.log('123123');
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.categoriesList !== nextState.categoriesList) {
            return true
        }
        /*else if (this.props.categories !== nextProps.categories) {
            return true
        }*/ else {
            return false
        }
    }

    componentDidUpdate() {
        console.log(this.state.categoriesList);
        console.log(this.props.categories.pages);
        // this.props.updatePagesFunction(this.state.categories);
    }

    render(){
        return (
            <div>
                <div className={style.wrap}>
                    <Title/>
                    <RandomPosts/>
                </div>
                <Categories/>
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
