import React, { Component } from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';

import style from './style.less';
import Header from './header';
import LogoBar from './logoBar';
import BannerBar from './bannerBar';
import HomeContent from './homeContent';
import PopularCategories from "./popularCategories";
import Footer from './footer'



class Index extends Component {
  render() {
    return (
      <div className={style.mainWrap}>
          <Route exact path="/" component={Header}/>
          <Route exact path="/" component={LogoBar}/>
          <Switch>
              <Route exact path="/">
                  <div>
                      <Route component={BannerBar}/>
                      <Route component={HomeContent}/>
                  </div>
              </Route>
          </Switch>
          <Route exact path="/" component={PopularCategories}/>
          <Route exact path="/" component={Footer}/>
      </div>
    );
  }
}

export default Index;
