import React, { Component } from 'react';
import style from './bannerBar.less';

class Banner extends Component{
    render(){
        return(
            <div className={style.imagesWrap}>
                <img className={style.bannerImage} src={require('../../../static/img/banner.png')} alt=""/>
            </div>
        )
    }
}

export default Banner;