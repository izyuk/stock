import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import style from './breadcrumbs.less';

class Breadcrumbs extends Component {
    constructor(props){
        super(props);
        this.state={}
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

export default Breadcrumbs;
