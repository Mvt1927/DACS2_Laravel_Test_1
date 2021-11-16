// resources\js\components\includes\index\bookroom_reserve\index.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import RouterPath from './RouterPath';
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: false
        }
    }
    render() {
        return (
            <HashRouter>
                <RouterPath/>
            </HashRouter>

        )
    }
}

if (window.location.pathname.split('/')[2] == "bookroom-reserve") {
    if (document.getElementById('bookroom_reserve')) {
        ReactDOM.render(
            <Index />,
            document.getElementById('bookroom_reserve'));
    }
}
