import React, {Component} from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import {onLoad} from '../../actions';

import { Api }  from '../../api';

import style from './style.less';
import Header from './header';
import LogoBar from './logoBar';
import BannerBar from './bannerBar';
import HomeContent from './homeContent';
import PopularCategories from "./popularCategories";
import Footer from './footer'
import InfoItemsRow from "../admin/content/infoItemsRow";
import Breadcrumbs from "./breadcrumbs/breadcrumbs";
import Search from "./search/search";
import Results from "./results/results";


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount(){
        let res = Api.getCats();
        console.log(res);
    }

    render() {
        return (
            <div className={style.mainWrap}>
                <Route component={Header}/>
                <Route render={(props) => <LogoBar path={window.location.pathname} {...props}/>}/>
                {window.location.pathname !== '/' ?
                    <Breadcrumbs/>
                    : false}
                <Switch>
                    <Route exact path="/">
                        <div>
                            <Route component={BannerBar}/>
                            <Route component={HomeContent}/>
                        </div>
                    </Route>
                    <Route path='/search'>
                        <div>
                            <Route component={Search}/>
                            <Route component={Results}/>
                        </div>
                    </Route>
                </Switch>
                <Route component={PopularCategories}/>
                <Route component={Footer}/>
            </div>
        );
    }
}

export default Index;
