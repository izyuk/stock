import React, { Component } from 'react';
import style from './homeContent.less';

import Title from './title';
import RandomPosts from './randPosts';
import Categories from '../categories/categories';

class HomeContent extends Component {
    render(){
        return (
            <div>
                <div className={style.wrap}>
                    <Title/>
                    <RandomPosts/>
                </div>
                <Categories/>
            </div>
        )
    }
}

export default HomeContent;