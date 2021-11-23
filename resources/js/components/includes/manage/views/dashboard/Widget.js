import { cilArrowTop, cilOptions } from '@coreui/icons';
import axios from 'axios';
import CIcon from '@coreui/icons-react';
import { CCol, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CRow, CWidgetStatsA, CWidgetStatsE } from '@coreui/react';
import { CChartBar, CChartLine } from '@coreui/react-chartjs'

import React, { Component } from 'react'
import MyGlobleSetting from './MyGlobleSetting'
class Widget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: {
                current: '0',
                available: '0',
                uncleaned: '0',
                repair: '0'
            }
        }
    }
    componentDidMount() {
        axios.get(MyGlobleSetting.url + '/api/control/get/inforooms')
            .then(response => {
                this.setState({ rooms: response.data.rooms });
                // console.log(this.state);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        return (
            <>
                <CRow className="mb-4 cursor-default">
                    <CCol sm={3} className="text-white ">
                        <CWidgetStatsE
                            className=""
                            color="primary"
                            title={<div className="text-white">Current</div>}
                            value={
                                <>
                                    <h1>{this.state.rooms.current}</h1>
                                    <span className="fs-6 fw-normal">
                                        Rooms
                                    </span>
                                </>
                            }
                        />
                    </CCol>
                    <CCol sm={3} className="text-white">
                        <CWidgetStatsE
                            className=""
                            color="info"
                            title={<div className="text-white">available</div>}
                            value={
                                <>
                                    <h1>{this.state.rooms.available}</h1>
                                    <span className="fs-6 fw-normal">
                                        Rooms
                                    </span>
                                </>
                            }
                        />
                    </CCol>
                    <CCol sm={3} className="text-white">
                        <CWidgetStatsE
                            className=""
                            color="warning"
                            title={<div className="text-white">Uncleaned</div>}
                            value={
                                <>
                                    <h1>{this.state.rooms.uncleaned}</h1>
                                    <span className="fs-6 fw-normal">
                                        Rooms
                                    </span>
                                </>
                            }
                        />
                    </CCol>
                    <CCol sm={3} className="text-white">
                        <CWidgetStatsE
                            className=""
                            color="danger"
                            title={<div className="text-white">repair</div>}
                            value={
                                <>
                                    <h1>{this.state.rooms.repair}</h1>
                                    <span className="fs-6 fw-normal">
                                        Rooms
                                    </span>
                                </>
                            }
                        />
                    </CCol>
                </CRow>
            </>
        )
    }
}
export default Widget
