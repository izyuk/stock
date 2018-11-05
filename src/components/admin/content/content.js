import React, {Component} from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';

import InfoItemsRow from './infoItemsRow';
import SearchBar from './searchBar/search-bar';
import SearchResults from './searchResults/search-results';
import Uploads from './uploads/uploads';
import style from './content.less';

class Content extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        console.log('content', window.location.pathname);
    }
    render() {
        return (
            <section className={style.contentWrap}>
                <Switch>
                    <Route exact path="/admin/panel">
                        <div className={style.contentInnerWrap}>
                            <Route render={(props) => <InfoItemsRow path={window.location.pathname} {...props}/>}/>
                            <Route component={SearchBar}/>
                            <Route component={SearchResults}/>
                        </div>
                    </Route>
                    <Route exact path="/admin/uploading">
                        <div className={style.contentInnerWrap}>
                            <Route render={(props) => <InfoItemsRow path={window.location.pathname} {...props}/>}/>
                            <Route component={Uploads} />
                        </div>
                    </Route>
                </Switch>
            </section>
        )
    }
}

export default Content;
