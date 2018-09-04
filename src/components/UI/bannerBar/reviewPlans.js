import React, { Component } from 'react';
import style from './bannerBar.less';

export default class ReviewPlans extends Component{
    render(){
        return(
            <div className={style.plansWrap}>
                <div className={style.wrap}>
                    <p>Великолепные фотографии от фотографов со всего мира</p>
                </div>
            </div>
        )
    }
}