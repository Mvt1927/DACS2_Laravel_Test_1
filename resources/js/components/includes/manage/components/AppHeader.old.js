import React from 'react'
import axios from "axios";
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {getCookie,logout} from '../cookie'
import MyGlobleSetting from '../MyGlobleSetting'

const AppHeader = () => {
    const dispatch = useDispatch()
    const sidebarShow = useSelector((state) => state.sidebarShow)
    if (getCookie('user-name')=='') {
        location.reload();
    }
    const logout = document.getElementById('logout-form')
    return (
        <div className="header header-sticky mb-4 " id='header'>
            <div className="container-fluid">
                <i className="fal fa-bars" onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}></i>
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
                            v-pre>
                            <div className="avatar avatar-md"><img
                                src={MyGlobleSetting.url+"/resources/Image/mvt1927.jpg"}
                                className="avatar-img"/>
                            </div>
                            <label className="ml-2" for="">{getCookie('user-name').replace('%20',' ')}</label>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" onClick="">
                                <i className="far fa-user-cog mr-4"></i>Setting
                            </a>
                            <a href={MyGlobleSetting.url+'/DACS2_Laravel_Test_1/logout'} className="dropdown-item" onClick=''>
                                <i className="far fa-sign-out-alt mr-4"></i>Logout
                            </a>
                            <form id="logout-form" action={MyGlobleSetting.url+'/DACS2_Laravel_Test_1/logout'} method="POST" className="d-none">
                                <input type="hidden" name="_token" value={getCookie('csrf-token')}></input>
                            </form>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="header-divider"></div>
            <div className="container-fluid">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb m-0 ms-2">
                        <li className="breadcrumb-item"><a className="" href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                </nav>
            </div>
        </div>
    )
}
export default AppHeader
