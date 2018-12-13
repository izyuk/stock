import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SearchBar from '../searchBar/searchBar';
import style from './logoBar.less';
import {connect} from 'react-redux';

class LogoBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: ''
        }
    }

    componentDidMount() {

    }


    componentDidUpdate(){

    }

    render() {
        return (
            <div className={style.coloredBlock}>
                <div className={style.wrap}>
                    <div className={style.bar}>
                        <Link to="/">
                            <span className={style.logo}>
                                <img src={require('../../../static/img/logo.png')} alt=""/>
                            </span>
                        </Link>
                        {this.props.path !== '/' ?
                            <SearchBar pageInfo={this.state.info} style={style}/>
                            : false}
                        <div className={style.stateButtons}>
                            <div className={style.form}>
                                <a href="#" className={style.login}>Sign in</a>
                                {this.props.path === '/' ?
                                    <Link to="/admin/panel">
                                        <span>Admin</span>
                                    </Link>
                                    : false}
                                <a href="#" className={style.register}>Join now</a>
                            </div>
                        </div>
                    </div>
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
)(LogoBar);
