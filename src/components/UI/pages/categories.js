import React, {Component} from 'react';
import BannerBar from '../bannerBar/bannerBar';
import CategoriesData from '../categories/categories';
import Header from "../header";
import LogoBar from '../logoBar/logoBar';
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import PopularCategories from "../popularCategories";
import Footer from '../footer'

class Categories extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div>
                <Header />
                <LogoBar path={window.location.pathname}/>
                <Breadcrumbs/>
                <BannerBar/>
                <CategoriesData/>
                <PopularCategories/>
                <Footer/>
            </div>
        )
    }
}

export default Categories;
