import React, {Component} from 'react';
import style from './search.less';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (

            <div className={style.filters}>
                <div className={style.wrap}>
                    <div className={style.bar}>
                        <div className={style.buttons}>
                            <button type="button" className={style.active}>Best match</button>
                            <button type="button">Newest</button>
                            <button type="button">Most popular</button>
                        </div>
                        <div className={style.pagination}>
                            <div className={style.ipp}>
                                <span>Items per page</span>
                                <select>
                                    <option value="120">120</option>
                                </select>
                            </div>
                            <div className={style.page}>
                                <span>Page</span>
                                <input type="number" defaultValue="120"/>
                                <span>of 80</span>
                                <div className={style.arrows}>
                                    <button type="button" disabled>&lt;</button>
                                    <button type="button">&gt;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;
