import React, { Component } from 'react';
import style from './homeContent.less';

class Title extends Component{
    render(){
        return(
            <div className={style.titleWrap}>
                <h3>Фотобанк с отличной подборкой спортивных фотографий и видео</h3>
                <p>Миллионы высококачественных фотографий и видеороликов. Воплощайте самые смелые идеи в дизайне.</p>
            </div>
        )
    }
}

export default Title;