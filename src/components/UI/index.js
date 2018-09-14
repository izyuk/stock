import React, {Component} from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import {onLoad} from '../../actions';

import { Api}  from '../../api';

import style from './style.less';
import Header from './header';
import LogoBar from './logoBar';
import BannerBar from './bannerBar';
import HomeContent from './homeContent';
import PopularCategories from "./popularCategories";
import Footer from './footer'


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount(){
        let res = Api.getCats();
        console.log(res);
        console.log(window.location.pathname);

        /*let anotherRes = Api.another();
        console.log(anotherRes);
        this.gal(anotherRes);*/
    }

    /*async gal(data){
        let newData = {data:{}};
        await Promise.all([data])
            .then(function (value) {
                newData['data'] = value[0];
                return newData;
            });
        console.log(newData);
    }*/

    render() {
        return (
            <div className={style.mainWrap}>
                {/*<Route exact path="/" component={Header}/>*/}
                {/*<Route exact path="/" component={LogoBar}/>*/}
                {/*<Switch>*/}
                    {/*<Route exact path="/">*/}
                        {/*<div>*/}
                            {/*<Route component={BannerBar}/>*/}
                            {/*<Route component={HomeContent}/>*/}
                        {/*</div>*/}
                    {/*</Route>*/}
                {/*</Switch>*/}
                {/*<Route exact path="/" component={PopularCategories}/>*/}
                {/*<Route exact path="/" component={Footer}/>*/}
                {/*To deploy*/}
                <Route exact path="/stock" component={Header}/>
                <Route exact path="/stock" component={LogoBar}/>
                <Switch>
                    <Route exact path="/stock">
                        <div>
                            <Route component={BannerBar}/>
                            <Route component={HomeContent}/>
                        </div>
                    </Route>
                </Switch>
                <Route exact path="/stock" component={PopularCategories}/>
                <Route exact path="/stock" component={Footer}/>
            </div>
        );
    }
}

export default Index;
