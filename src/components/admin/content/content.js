import React, {Component} from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';

import InfoItemsRow from './infoItemsRow';
import SearchBar from './searchBar/search-bar';
import SearchResults from './searchResults/search-results';
import style from './content.less';

class Content extends Component {
    render() {
        return (
            <section className={style.contentWrap}>
                <Switch>
                    <Route exact path="/admin/panel">
                        <div>
                            <Route component={InfoItemsRow}/>
                            <Route component={SearchBar}/>
                            <Route component={SearchResults}/>
                        </div>
                    </Route>
                    <Route exact path="/admin/uploading">
                        <div>
                            <Route component={InfoItemsRow}/>
                            {/*<Route />*/}
                        </div>
                    </Route>
                </Switch>
            </section>
        )
    }
}

export default Content;