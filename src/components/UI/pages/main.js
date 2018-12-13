import React, {Component} from 'react';
import BannerBar from '../bannerBar/bannerBar';
import HomeContent from '../homeContent/homeContent';
import Header from "../header";
import LogoBar from '../logoBar/logoBar';
import PopularCategories from "../popularCategories";
import Footer from '../footer'
import {Route} from "react-router-dom";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Header/>
                <LogoBar path={window.location.pathname}/>
                <BannerBar/>
                <HomeContent/>
                <PopularCategories />
                <Footer/>
            </div>
        )
    }
}

export default Main;
