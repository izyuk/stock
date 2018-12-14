import React, {Component} from 'react';
import BannerBar from '../bannerBar/bannerBar';
import CategoriesData from '../categories/categories';
import Header from "../header";
import LogoBar from '../logoBar/logoBar';
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import PopularCategories from "../popularCategories";
import Footer from '../footer';
import {Api} from "../../../api/API";
import {connect} from 'react-redux';

class Categories extends Component {
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
        console.log('Categories component is Updated \n', this.state.categories);
    }
    render(){
        return(
            <div>
                <Header />
                <LogoBar path={window.location.pathname}/>
                <Breadcrumbs/>
                <BannerBar/>
                <CategoriesData list={this.state.categories}/>
                <PopularCategories/>
                <Footer/>
            </div>
        )
    }
}

export default connect(
    state => ({
        categories: state.categories
    }),
    dispatch => ({
        updatePagesFunction: (categories) => {
            dispatch({type: "UPDATE_PAGE_LIST", payload: categories})
        }
    })
)(Categories);