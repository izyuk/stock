import React, {Component} from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';

import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import Content from './content/content';
import Footer from './footer/footer';
import style from '../../static/exp.less';
import InfoItemsRow from "./content/infoItemsRow";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log('content', window.location.pathname);
    }

    render() {
        return (
            <div>
                <Header/>
                <div className={style.adminContent}>
                    <Sidebar path={window.location.pathname}/>
                    <Content page={this.props.page}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Admin;
