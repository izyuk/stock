import React, { Component } from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';

import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import Content from './content/content';
import Footer from './footer/footer';
import style from '../../static/exp.less';

class Admin extends Component {
    render(){
        return(
            <div>
                <Route exact path="/admin" component={Header}/>
                <div className={style.adminContent}>
                    <Route path="/admin" component={Sidebar}/>
                    <Route path="/admin" component={Content}/>
                </div>
                <Route exact path="/admin" component={Footer}/>
                {/*To deploy*/}
                {/*<Route exact path="/stock/admin" component={Header}/>*/}
                {/*<div className={style.adminContent}>*/}
                    {/*<Route path="/stock/admin" component={Sidebar}/>*/}
                    {/*<Route path="/stock/admin" component={Content}/>*/}
                {/*</div>*/}
                {/*<Route exact path="/stock/admin" component={Footer}/>*/}
            </div>
        )
    }
}

export default Admin;