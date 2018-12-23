import React, {Component} from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';

import InfoItemsRow from './infoItemsRow';
import SearchBar from './searchBar/search-bar';
import SearchResults from './searchResults/search-results';
import Uploads from './uploads/uploads';
import Edit from './edit/edit';
import Categories from './categories/categories';
import style from './content.less';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // console.log('content', window.location.pathname);
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
                            <Route render={(props) => <Uploads transferUploadingData={this.props.transferUploadingData} {...props}/>}/>
                        </div>
                    </Route>
                    <Route exact path="/admin/edit">
                        <div className={style.contentInnerWrap}>
                            <Route render={(props) => <InfoItemsRow path={window.location.pathname} {...props}/>}/>
                            <Route component={Edit}/>
                        </div>
                    </Route>
                    <Route exact path="/admin/categories">
                        <div>
                            <Route render={(props) => <InfoItemsRow path={window.location.pathname} {...props}/>}/>
                            <Route component={Categories}/>
                        </div>

                    </Route>
                </Switch>
            </section>
        )
    }
}

export default Content;
