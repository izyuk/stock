import React, { Component } from 'react';
import style from './bannerBar.less';
import Banner from "./banner";
import Search from "./search";
import ReviewPlans from './reviewPlans';


class BannerBar extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className={style.banner}>
                <Banner/>
                <Search/>
                <ReviewPlans/>
            </div>
        )
    }
}

export default BannerBar;