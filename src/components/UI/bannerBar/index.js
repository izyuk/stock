import React, { Component } from 'react';
import style from './bannerBar.less';
import Banner from "./banner";
import SearchBar from "../searchBar/searchBar";
import ReviewPlans from './reviewPlans';


class BannerBar extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className={style.banner}>
                <Banner/>
                <SearchBar style={style}/>
                <ReviewPlans/>
            </div>
        )
    }
}

export default BannerBar;
