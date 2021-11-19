import { React, Component } from 'react'
import axios from "axios";
import { getCookie, logout } from '../cookie'
import MyGlobleSetting from '../MyGlobleSetting'
import Bars from './AppHeader.bars';
import {
    CContainer,
    CHeaderDivider,
} from '@coreui/react'
import AppBreadcrumb from './AppBreadcrumb'
class AppHeader extends Component {
    constructor(props) {
        super(props);
    };
    logout = (event) => {
        event.preventDefault();
        var cookie = {
            _token: getCookie('csrf-token')
        };
        axios.post(MyGlobleSetting.url + '/DACS2_Laravel_Test_1/logout', cookie)
            .then(response => {
                window.location.href = MyGlobleSetting.url + '/DACS2_Laravel_Test_1/logout';
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        return (
            <div className="header header-sticky mb-4 " id='header'>
                <div className="container-fluid pl-0">
                    <Bars />
                    <a className="header-brand mx-auto d-md-none" to="/"></a>
                    <ul className="header-nav d-none d-md-flex me-auto" role="navigation">
                        <li className="nav-item"><a aria-current="page" className="nav-link active"
                            href="#/dashboard">Dashboard</a></li>
                    </ul>
                    <ul className="header-nav" role="navigation">
                        <li className="nav-item dropdown"><a href="#" className="nav-link" aria-expanded="false"><i
                            className="fal fa-bell"></i><span
                                className="badge bg-danger-gradient rounded-pill position-absolute top-0 end-0">5</span></a>
                        </li>
                        <li className="nav-item dropdown"><a href="#" className="nav-link" aria-expanded="false"><i
                            className="far fa-list-ul"></i><span
                                className="badge bg-warning-gradient rounded-pill position-absolute top-0 end-0">5</span></a>
                        </li>
                        <li className="nav-item dropdown"><a href="#" className="nav-link c-header-nav-link"
                            aria-expanded="false"><i className="fal fa-envelope-open-text"></i><span
                                className="badge bg-info-gradient rounded-pill position-absolute top-0 end-0">4</span></a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto header-nav ms-3 me-4" role="navigation" id="user-morechoose">
                        <li className="nav-item dropdown">
                            <a id="navbarDropdown" className="nav-link py-0 container-avatar dropdown-toggle"
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                v-pre='true'>
                                <div className="avatar avatar-md"><img
                                    src={MyGlobleSetting.url + "/resources/Image/mvt1927.jpg"}
                                    className="avatar-img" />
                                </div>
                                <label className="ml-2" htmlFor="">{getCookie('user-name').replace('%20', ' ')}</label>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item">
                                    <i className="far fa-user-cog mr-4"></i>Setting
                                </a>
                                <a href={MyGlobleSetting.url + '/DACS2_Laravel_Test_1/logout'} className="dropdown-item" onClick={(event) => this.logout(event)}>
                                    <i className="far fa-sign-out-alt mr-4"></i>Logout
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <CHeaderDivider />
                <CContainer fluid >
                    <AppBreadcrumb />
                </CContainer>
            </div>
        )
    }
}
export default AppHeader;
