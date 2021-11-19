
import React, { Component } from "react";
import MyGlobleSetting from "./MyGlobleSetting";
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

if (window.location.pathname.split('/')[2] == "dashboard") {
    if (document.getElementById('root_dashboard')) {
        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>, document.getElementById('root_dashboard'),
        )
    }
}
