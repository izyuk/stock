import React, { Component } from 'react';
import style from '../bannerBar/bannerBar.less';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className={this.props.style.searchWrap}>
                <div className={this.props.style.controls}>
                    <input type="text" placeholder="Поиск фотографий и видео"/>
                    <button>
                        icon
                    </button>
                </div>
            </div>
        )
    }
}

export default SearchBar;
