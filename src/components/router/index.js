import React, { Component } from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import Index from '../UI/index';
import Admin from '../admin';

export default class MainRouter extends Component {
    render(){
        return(
            <Switch>
                <Route exact
                       path="/"
                       component={Index}/>
                <Route exact
                       path="/admin"
                       component={Admin}/>
                {/*To deploy*/}
                {/*<Route exact*/}
                       {/*path="/stock"*/}
                       {/*component={Index}/>*/}
                {/*<Route exact*/}
                       {/*path="/stock/admin"*/}
                       {/*component={Admin}/>*/}
            </Switch>
        )
    }
}
