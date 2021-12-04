import { CButton, CCard, CCardBody, CCol, CContainer, CFormInput, CFormLabel, CFormSelect, CInputGroup, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import axios from "axios";
import React, { Component } from "react";
import MyGlobleSetting from "../MyGlobleSetting";
class Room_info extends Component {
    constructor(props) {
        super(props);
        this.itemsPerPage = 10;
        this.state = {
            Find_booking_FormControlInput: "",
            loading_find: false,
            currentPage: '1',
            pageNumbers: '1',
            bookingsData: [[]],
            splitData: [[]]
        }
    }
    getBookings() {
        axios.get(MyGlobleSetting.url + '/api/control/get/get-booking')
            .then(response => {
                const n = this.itemsPerPage; //items per page
                var data = response.data.bookrooms;
                if (data.length != 0) {
                    const pageNumbers = Math.ceil(data.length / n);
                    const splitData = new Array(pageNumbers)
                        .fill()
                        .map(_ => data.splice(0, n));
                    this.setState({
                        pageNumbers: pageNumbers,
                        splitData: splitData
                    })
                } else {
                    this.setState({
                        pageNumbers: '1',
                        splitData: [[]]
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    getBookingsData() {
        axios.get(MyGlobleSetting.url + '/api/control/get/get-booking')
            .then(response => {
                var data = response.data.bookrooms;
                const pageNumbers = Math.ceil(1);
                const splitData = new Array(pageNumbers)
                    .fill()
                    .map(_ => data.splice(0, data.length));
                this.setState({
                    bookingsData: splitData
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    componentDidMount() {
        this.getBookings();
        this.getBookingsData();
    }
    find = (event) => {
        event.preventDefault();
        this.setState({
            Find_booking_FormControlInput: event.target.value,
            loading_find: true,
            currentPage: '1'
        })
        const searchString = event.target.value;
        const data = this.state.bookingsData.at(0);

        if (data != null) {
            const filteredData = data.filter(element => {
                return element.id.toString().toLowerCase().includes(searchString.toLowerCase())
                    || element.name.toString().toLowerCase().includes(searchString.toLowerCase())
                    || element.phone.toString().toLowerCase().includes(searchString.toLowerCase())
                    || element.stats.toString().toLowerCase().includes(searchString.toLowerCase())
            });
            const n = this.itemsPerPage; //items per line
            const pageNumbers = Math.ceil(filteredData.length / n);
            const splitData = new Array(Math.ceil(filteredData.length / n))
                .fill()
                .map(_ => filteredData.splice(0, n));
            if (splitData.at(0) == null) {
                this.setState({
                    loading_find: false,
                    pageNumbers: '1',
                    splitData: [[]],
                });
            } else {
                this.setState({
                    loading_find: false,
                    pageNumbers: pageNumbers,
                    splitData: splitData,
                });
            }
        }
    }
    find_btn = (event) => {
        event.preventDefault();
        this.setState({
            loading_find: true,
            currentPage: '1'
        })
        setTimeout(() => {
            this.setState({
                loading_find: false,
            })
        }, 2000)

    }
    checkLoading =(value) =>{
        if (this.state['loading_'+value] == null) {
            return false
        } else return this.state['loading_'+value]
    }
    checkID = (value) => {
        if (this.state[value] == null) {
            return true
        } else return this.state[value]
    }
    isChange = (event, id, stats) => {
        event.preventDefault();
        if (event.target.value != stats) {
            this.setState({
                [id]: false,
                ['stats_' + id]: event.target.value
            })
        } else this.setState({ [id]: true })
    }
    save = (event, id) => {
        event.preventDefault();
        if (this.state[id] != null && this.state[id] == false) {
            this.setState({
                [id]: true,
                ['loading_'+id]: true
            })
            var booking_stats = {
                id: id,
                stats: this.state['stats_' + id]
            }
            let url = MyGlobleSetting.url + '/api/control/post/edit-booking-stats';
            axios.post(url, booking_stats)
                .then(response => {
                    this.getBookings();
                    this.getBookingsData();
                    this.setState({
                        ['loading_'+id]: false
                    })
                })
                .catch(error=> {
                    this.setState({
                        [id]: false,
                        ['loading_'+id]: false
                     })
                    console.log(error);
                })
        }

    }
    table() {
        if (this.state.splitData.at(this.state.currentPage - 1).length != 0) {
            return this.state.splitData.at(this.state.currentPage - 1).map((i) => {
                return (
                    <CTableRow id={i.id} key={i.id} /* onClick={(event) => this.inputValueSelect(event, i.id)} */>
                        <CTableDataCell>{i.id}</CTableDataCell>
                        <CTableDataCell>{i.name}</CTableDataCell>
                        <CTableDataCell>{i.phone}</CTableDataCell>
                        <CTableDataCell>{i.day}</CTableDataCell>
                        <CTableDataCell>{i.idroom}</CTableDataCell>
                        <CTableDataCell style={{ padding: "1.5px" }}>
                            <CFormSelect defaultValue={i.stats} name="Book_Room_Form_Input_Room_Code" onChange={event => this.isChange(event, i.id, i.stats)}>
                                <option value='are renting'>Are renting</option>
                                <option value='checked out'>Checked out</option>
                                <option value='cancelled'>Cancelled</option>
                            </CFormSelect>
                        </CTableDataCell>
                        <CTableDataCell style={{ padding: "1.5px" }} className="text-center">
                            <CButton type="submit" className="" onClick={(event) => this.save(event, i.id)} disabled={this.checkID(i.id)}>
                                {this.checkLoading(i.id) && <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></>}
                                {!this.checkLoading(i.id) && <><i className="fal fa-save"></i> Save</>}
                            </CButton>
                        </CTableDataCell>
                    </CTableRow>
                )
            })
        } else {
            return (
                <CTableRow disabled className="font-italic text-center">
                    <CTableDataCell>null</CTableDataCell>
                    <CTableDataCell>null</CTableDataCell>
                    <CTableDataCell>null</CTableDataCell>
                    <CTableDataCell>null</CTableDataCell>
                    <CTableDataCell>null</CTableDataCell>
                    <CTableDataCell>null</CTableDataCell>
                    <CTableDataCell style={{ padding: "1.5px" }}>
                        <CButton type="submit" className="" disabled={true}>
                            <i className="fal fa-save"></i> Save
                        </CButton>
                    </CTableDataCell>
                </CTableRow>
            )
        }
    }
    pageNext() {
        if (this.state.currentPage < this.state.pageNumbers) {
            return "cursor-pointer"
        } else return "disabled"
    }
    pageLast() {
        if (this.state.currentPage < this.state.pageNumbers) {
            return "cursor-pointer"
        } else return "disabled"
    }
    pagePre() {
        if (this.state.currentPage > 1) {
            return "cursor-pointer"
        } else return "disabled"
    }
    pageFist() {
        if (this.state.currentPage > 1) {
            return "cursor-pointer"
        } else return "disabled"
    }
    pageNextOnClick = (event) => {
        event.preventDefault();
        if (this.state.currentPage < this.state.pageNumbers) {
            this.setState({
                currentPage: this.state.currentPage - 0 + 1
            })
        }
    }
    pageLastOnClick = (event) => {
        event.preventDefault();
        if (this.state.currentPage < this.state.pageNumbers) {
            this.setState({
                currentPage: this.state.pageNumbers
            })
        }
    }
    pagePreOnClick = (event) => {
        event.preventDefault();
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            })
        }
    }
    pageFistOnClick = (event) => {
        event.preventDefault();
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: 1
            })
        }
    }
    render() {
        return (
            <CCard>
                <CCardBody>
                    <CContainer>
                        <CRow>
                            <CCol xs={12}>
                                <CRow>
                                    <CCol xs={8}>
                                        <CFormLabel htmlFor="Find_room_FormControlInput">Room code or room name</CFormLabel>
                                        <CInputGroup>
                                            <CFormInput type="text" id="Find_room_FormControlInput" name="Find_room_FormControlInput" placeholder="Room code or room name" defaultValue={this.state.Find_booking_FormControlInput} onChange={(event) => this.find(event)} />
                                            <CButton type="submit" className="float-right" onClick={(event) => this.find_btn(event)} disabled={this.state.loading_find}>
                                                {this.state.loading_find && <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></>}
                                                {!this.state.loading_find && <><i className="far fa-search"></i></>}
                                            </CButton>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol xs={1}></CCol>
                                    <CCol xs={3} style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>

                                        <ul className="pagination" style={{ justifyContent: "flex-end", marginBottom: '0' }}>
                                            <li className={"cursor-default page-item " + this.pageFist()}>
                                                <a className="page-link" onClick={event => this.pageFistOnClick(event)} aria-label="Go to first page">«</a>
                                            </li>
                                            <li className={"cursor-default page-item " + this.pagePre()}>
                                                <a className="page-link" onClick={event => this.pagePreOnClick(event)} aria-label="Go to previous page">⟨</a>
                                            </li>
                                            <li className="cursor-default page-item active">
                                                <a className="page-link" aria-label="Go to previous page">{this.state.currentPage}</a>
                                            </li>
                                            <li className={"cursor-default page-item " + this.pageNext()}>
                                                <a className="page-link" onClick={event => this.pageNextOnClick(event)} aria-label="Go to next page">⟩</a>
                                            </li>
                                            <li className={"cursor-default page-item " + this.pageLast()}>
                                                <a className="page-link" onClick={event => this.pageLastOnClick(event)} aria-label="Go to last page">»</a>
                                            </li>
                                        </ul>

                                    </CCol>
                                </CRow>
                            </CCol>
                            <CCol xs={12} style={{ minHeight: '1rem' }} />
                            <CCol xs={12}>
                                <CTable hover bordered className='cursor-pointer'>
                                    <CTableHead className="thead-light">
                                        <CTableRow >
                                            <CTableHeaderCell scope='col' className="col-1 text-center">ID</CTableHeaderCell>
                                            <CTableHeaderCell scope='col' className='col-2 text-center'>Name</CTableHeaderCell>
                                            <CTableHeaderCell scope='col' className="col-2 text-center">Phone</CTableHeaderCell>
                                            <CTableHeaderCell scope='col' className="col-1 text-center">Day</CTableHeaderCell>
                                            <CTableHeaderCell scope='col' className="col-1 text-center">IDRoom</CTableHeaderCell>
                                            <CTableHeaderCell scope='col' className="col-2 text-center">Stats</CTableHeaderCell>
                                            <CTableHeaderCell scope='col' className="col-1 text-center"></CTableHeaderCell>
                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>
                                        {this.table()}
                                    </CTableBody>
                                </CTable>
                            </CCol>
                        </CRow>
                    </CContainer>
                </CCardBody>
            </CCard>
        )
    }
}
export default Room_info
