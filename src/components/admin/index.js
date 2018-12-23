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
        this.state = {
            uploadingInfo: {}
        };
        this.transferUploadingData = this.transferUploadingData.bind(this);
    }

    componentDidMount() {
        console.log('content', window.location.pathname);
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.uploadingInfo !== nextState.uploadingInfo){
            return true
        } else {
            return true
        }
    }

    componentDidUpdate(){
        // console.log('Admin main component updated with uploadingInfo', this.state.uploadingInfo);
        // console.log(this.state.uploadingInfo)
    }

    transferUploadingData(data){
        // console.log(data);
        // let newState = [];
        // newState[i] = data;
        this.setState({
            uploadingInfo: data
        });
    }

    render() {
        return (
            <div>
                <Header/>
                <div className={style.adminContent}>
                    <Sidebar path={window.location.pathname} uploadingInfo={this.state.uploadingInfo}/>
                    <Content page={this.props.page} transferUploadingData={this.transferUploadingData}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Admin;
