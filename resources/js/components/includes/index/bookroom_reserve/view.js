import React, { Component } from 'react';
import MyGlobleSetting from '../MyGlobleSetting'
import { Link } from 'react-router-dom';
import axios from 'axios';
class View extends Component {
    constructor(props) {
        super(props);
        this.location = false;
        this.state = {
            status: '',
            id: 'None',
            regitime: 'None',
            fullname: 'None',
            phone: 'None',
            num: 'None',
            date: 'None',
            regitime: 'None',
            idroom: 'None'
        }
    }
    componentDidMount() {
        // Router laravel
        //
        if (location.hash == '#/search/' + this.props.match.params.id + '/view'||location.hash == '#/search/' + this.props.match.params.id + '/view/') {
            this.location = true;
        }
        axios.get(MyGlobleSetting.url + '/api/control/get/bookrooms-reserve/' + this.props.match.params.id)
            .then(response => {
                if (response.data.status == 'none') {
                    this.setState({
                        status: response.data.status,
                    })
                } else {
                    this.setState({
                        status: response.data.status,
                        id: response.data.id,
                        fullname: response.data.name,
                        phone: response.data.phone,
                        num: response.data.num,
                        date: response.data.date,
                        regitime: response.data.regidate,
                        idroom: response.data.idroom
                    });
                }
            })
            .catch(function (error) {
                /* console.log(error); */
            })
    }
    checkcode() {
        if (this.state.status == 'none') {
            return (
                <h2 className="text-danger text-center font-weight-bold text text-uppercase" >Your reservation code does not exist</h2>
            );
        }
    }
    checklocation() {
        if (this.location) {
            return (<Link to={'/'} className="btn ">Back <i className="fas fa-reply"></i></Link>);
        }
        return (<a href={MyGlobleSetting.url + "/DACS2_Laravel_Test_1"} className="btn ">Back <i className="fas fa-reply"></i></a>)
    }
    render() {
        return (
            <main>
                <h1 className="text-uppercase font-weight-bold text-primary text-center">Booking information</h1>
                <h2 style={{ margin: "1rem" }}>
                    Reservation code: <code style={{ font: '1em "Consolas", sans-serif' }} >{this.props.match.params.id}</code>
                </h2>
                {this.checkcode()}
                <div className="center-block">
                    <table className="table col-10 rounded-3 center-block table-striped table-borderless" >
                        <tbody>
                            <tr>
                                <th className="col-5">Your Reservation code</th>
                                <td className="col-2">:</td>
                                <td className="col-5"><code>{this.state.id}</code></td>
                            </tr>
                            <tr>
                                <th className="col-5">Registration Time</th>
                                <td className="col-2">:</td>
                                <td className="col-5">{this.state.regitime}</td>
                            </tr>
                            <tr>
                                <th className="col-5">Your full name</th>
                                <td className="col-2">:</td>
                                <td className="col-5">{this.state.fullname}</td>
                            </tr>
                            <tr >
                                <th className="col-5">Your Phone</th>
                                <td className="col-2">:</td>
                                <td className="col-5">{this.state.phone}</td>
                            </tr>
                            <tr>
                                <th className="col-5">Number of people</th>
                                <td className="col-2">:</td>
                                <td className="col-5">{this.state.num}</td>
                            </tr>
                            <tr >
                                <th className="col-5">Arrival day</th>
                                <td className="col-2">:</td>
                                <td className="col-5">{this.state.date}</td>
                            </tr>
                            <tr>
                                <th className="col-5">Reservation Room Code</th>
                                <td className="col-2">:</td>
                                <td className="col-5">{this.state.idroom}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                {this.checklocation()}
            </main>
        );
    }
}
export default View;
