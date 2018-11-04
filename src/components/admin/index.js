import React, {Component} from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';

import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import Content from './content/content';
import Footer from './footer/footer';
import style from '../../static/exp.less';

class Admin extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className={style.adminContent}>
                    <Sidebar/>
                    <Content/>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Admin;