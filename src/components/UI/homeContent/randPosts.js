import React, { Component } from 'react';
import style from './homeContent.less';

class RandomPosts extends Component{
    render(){
        return(
            <div className={style.randomPostsWrap}>
                <div className={style.item}>
                    <p className={style.description}>Безупречные подборки спортивных фото от наших редакторов</p>
                    <img src={require('../../../static/img/rand1.png')} alt=""/>
                </div>
                <div className={style.item}>
                    <p className={style.description}>Видео-заставки и футажи в FullHD и 4К разрешении</p>
                    <img src={require('../../../static/img/rand2.png')} alt=""/>
                </div>
            </div>
        )
    }
}

export default RandomPosts;