import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './search';
import View from './view';
class RouterPath extends Component {
    render() {
        return (
            <div style={{ marginTop: '6.5rem' }}>
                <Switch>
                    <Route exact path="/search/:id/view" component={View} />
                    <Route exact path="/search/view" component={Search} />
                    <Route exact path="/view/" component={Search} />
                    <Route exact path="/view" component={Search} />
                    <Route exact path="/view/:id" component={View} />
                    <Route exact path="/" component={Search} />
                </Switch>
            </div>
        )
    }
}

export default RouterPath;

