/**
 * Created by Jessie on 16/12/9.
 */


require('../styles/main.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/App/App.jsx';

import Publisher from './components/Publisher/Publisher.jsx';
import TodoApp from './components/TodoApp/TodoApp.jsx';

class Dashboard extends React.Component {
    render() {
        return <div>Welcome to the app!</div>
    }
}



ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard} />
            <Route path="/publisher" component={Publisher} />
            <Route path="/todo" component={TodoApp} />
        </Route>
    </Router>,
    document.getElementById('app')
);