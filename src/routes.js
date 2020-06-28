import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard'

export default (
    <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/login" component={Login}/>
    </Switch>
);