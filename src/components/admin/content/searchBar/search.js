import React, {Component} from 'react';

import style from './searchBar.less';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        if (this.props.path === '/admin/categories') {
            return (
                <div className={[style.searchRow, style.categories].join(' ')}>
                    <div className={style.search}>
                        <span>icon</span>
                        <input type="text"
                               placeholder="Футбол"/>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={style.search}>
                    <span>icon</span>
                    <input type="text"
                           placeholder="Футбол"/>
                </div>
            )
        }

    }
}

export default Search;
