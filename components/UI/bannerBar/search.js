import React, { Component } from 'react';
import style from './bannerBar.less';

class Search extends Component{
    render(){
        return(
            <div className={style.searchWrap}>
                <div className={style.controls}>
                    <input type="text" placeholder="Поиск фотографий и видео"/>
                    <button>
                        icon
                    </button>
                </div>
            </div>
        )
    }
}

export default Search;