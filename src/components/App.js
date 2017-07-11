import React, { Component, PropTypes } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import store from '../redux/store';

import Layout from "./Layout";
import Login from './Login';
import Test  from './Test';

export default function(){
    return (
        <Provider store={store}>
            <Router history={createHistory()}>
                <div>
                    <Route path="/login"  component={Login} />
                    <Route path="/signup" component={Login} />
                    <Route path="/home" component={Layout} />
                </div>
            </Router>
        </Provider>
    );
}