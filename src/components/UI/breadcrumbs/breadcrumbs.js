import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import style from './breadcrumbs.less';
import connect from "react-redux/es/connect/connect";

class Breadcrumbs extends Component {
    constructor(props){
        super(props);
        this.state={
            info: ''
        }
    }

    componentDidMount() {
        // console.log('logoBar', this.props.page_info && this.props.page_info);
        // this.setState({
        //     info: this.props.page_info.info
        // });
        // console.log('logoBar', this.state);
        // console.log('props pageInfo', this.props.pageInfo);
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     if(this.state.info !== nextState.info){
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    componentDidUpdate(){
        // console.log('Breadcrumbs props pageInfo updated', this.props.pageInfo);
        // this.setState({
        //     info: this.props.pageInfo
        // });
    }

    render(){
        return(
            <div className={style.bc}>
                <div className={style.wrap}>
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/">Результаты поиска по слову «Футбол»</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        page_info: state.page_info
    }),
    dispatch => ({})
)(Breadcrumbs);
