import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Index from '../UI/index';

export default class MainRouter extends Component {
    render(){
        return(
            <Switch>
                <Route path="/" component={Index}/>
            </Switch>
        )
    }
}
