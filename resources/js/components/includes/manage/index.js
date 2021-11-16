import axios from "axios";
import React, { Component } from "react";
import MyGlobleSetting from "./MyGlobleSetting";
import ReactDOM from 'react-dom'
export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ''
        }
    };
    componentDidMount() {
       /*  axios.post(MyGlobleSetting.url + '/api/control/auth/details')
            .then(response => {
                this.setState({ user: response.data });
                console.log(this.state);
            })
            .catch(function (error) {
                console.log(error);
            }) */

    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">Example Component</div>
                            <div className="card-body"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
if (window.location.pathname.split('/')[2] == "dashboard") {
    if (document.getElementById('root_dashboard')) {
        ReactDOM.render(
        <Dashboard />, document.getElementById('root_dashboard'),
        )
    }
}
