import React, { Component } from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';

import Header from './header';
import Sidebar from './sidebar';
import style from '../../static/exp';

class Admin extends Component {
    render(){
        return(
            <div>
                <Route exact path="/admin" component={Header}/>
                <div className={style.adminContent}>
                    <Route path="/admin" component={Sidebar}>
                </div>
            </div>
        )
    }
}

export default Admin;