import { CButton, CCard, CCardBody, CCol, CContainer, CForm, CFormInput, CFormLabel, CFormSelect, CFormTextarea, CInputGroup, CRow, CTable, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import axios from "axios";
import React, { Component } from "react";
import Option from "./Option";
import MyGlobleSetting from "../MyGlobleSetting";
import { useDispatch, useSelector } from "react-redux";
import { isNumber } from "lodash";
class Bookroom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: '',
            loading_find: false,
            loading_save: false,
            Book_Room_Form_Input_Name:'',
            Book_Room_Form_Input_Date_Of_Birth: '',
            Book_Room_Form_Input_CCCD: '',
            Book_Room_Form_Input_Phone: '',
            Book_Room_Form_Input_Number_Of_People: '1',
            Book_Room_Form_Input_Number_Of_Days_Stay: '1',
            Book_Room_Form_Input_Room_Code: '',
            Find_code_FormControlInput: ''
        }
        if (localStorage.Book_Room_Form_Input_Name!=null) {
            this.state.Book_Room_Form_Input_Name = localStorage.Book_Room_Form_Input_Name;
        }
        if (localStorage.Book_Room_Form_Input_Date_Of_Birth!=null) {
            this.state.Book_Room_Form_Input_Date_Of_Birth = localStorage.Book_Room_Form_Input_Date_Of_Birth;
        }
        if (localStorage.Book_Room_Form_Input_CCCD!=null) {
            this.state.Book_Room_Form_Input_CCCD = localStorage.Book_Room_Form_Input_CCCD;
        }
        if (localStorage.Book_Room_Form_Input_Phone!=null) {
            this.state.Book_Room_Form_Input_Phone = localStorage.Book_Room_Form_Input_Phone;
        }
        if (localStorage.Book_Room_Form_Input_Number_Of_People!=null) {
            this.state.Book_Room_Form_Input_Number_Of_People = localStorage.Book_Room_Form_Input_Number_Of_People;
        }
        if (localStorage.Book_Room_Form_Input_Number_Of_Days_Stay!=null) {
            this.state.Book_Room_Form_Input_Number_Of_Days_Stay = localStorage.Book_Room_Form_Input_Number_Of_Days_Stay;
        }
        // console.log(localStorage);
    }
    componentDidMount() {
        axios.get(MyGlobleSetting.url + '/api/control/get/option_rooms')
            .then(response => {
                this.setState({ options: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    option() {
        var num = 0;
        if (this.state.options instanceof Array) {
            return this.state.options.map(function (object, i) {
                num++;
                return <Option obj={object} key={i} num={num} />;
            })
        }
    }
    find = (event) => {
        event.preventDefault();
        this.setState({ loading_find: true });
        setTimeout(() => {
            this.setState({ loading_find: false });
        }, 2000)
    }
    save = (event) => {
        event.preventDefault();
        this.setState({ loading_save: true });
        var Name = document.getElementById('Book_Room_Form_Container_Name');
        var Date_Of_Birth = document.getElementById('Book_Room_Form_Container_Date_Of_Birth');
        var CCCD = document.getElementById('Book_Room_Form_Container_CCCD');
        var Phone = document.getElementById('Book_Room_Form_Container_Phone');
        var Number_Of_People = document.getElementById('Book_Room_Form_Container_Number_Of_People');
        var Number_Of_Days_Stay = document.getElementById('Book_Room_Form_Container_Number_Of_Days_Stay');
        var Room_Code = document.getElementById('Book_Room_Form_Container_Room_Code');
        if (Name != null && Date_Of_Birth != null && Phone != null && CCCD != null && Number_Of_People != null && Number_Of_Days_Stay != null && Room_Code != null) {
            if (this.state.Book_Room_Form_Input_Name == "") {
                Name.firstChild.classList.add('text-danger');
                Name.lastChild.classList.add('border-danger');
                this.setState({ loading_save: false });
            } else if (this.state.Book_Room_Form_Input_Date_Of_Birth == "") {
                Date_Of_Birth.firstChild.classList.add('text-danger');
                Date_Of_Birth.lastChild.classList.add('border-danger');
                this.setState({ loading_save: false });
            } else if (this.state.Book_Room_Form_Input_CCCD == "") {
                CCCD.firstChild.classList.add('text-danger');
                CCCD.lastChild.classList.add('border-danger');
                this.setState({ loading_save: false });
            } else if (this.state.Book_Room_Form_Input_Phone == "") {
                Phone.firstChild.classList.add('text-danger');
                Phone.lastChild.classList.add('border-danger');
                this.setState({ loading_save: false });
            } else if (this.state.Book_Room_Form_Input_Number_Of_People == "") {
                Number_Of_People.firstChild.classList.add('text-danger');
                Number_Of_People.lastChild.classList.add('border-danger');
                this.setState({ loading_save: false });
            } else if (this.state.Book_Room_Form_Input_Number_Of_Days_Stay == "") {
                Number_Of_Days_Stay.firstChild.classList.add('text-danger');
                Number_Of_Days_Stay.lastChild.classList.add('border-danger');
                this.setState({ loading_save: false });
            } else if (this.state.Book_Room_Form_Input_Room_Code == "") {
                Room_Code.firstChild.classList.add('text-danger');
                Room_Code.lastChild.classList.add('border-danger');
                this.setState({ loading_save: false });
            } else {
                var Bookroom_form = {
                    name: this.state.Book_Room_Form_Input_Name,
                    birth: this.state.Book_Room_Form_Input_Date_Of_Birth,
                    cccd: this.state.Book_Room_Form_Input_CCCD,
                    phone: this.state.Book_Room_Form_Input_Phone,
                    num: this.state.Book_Room_Form_Input_Number_Of_People,
                    day: this.state.Book_Room_Form_Input_Number_Of_Days_Stay,
                    idroom: this.state.Book_Room_Form_Input_Room_Code,
                };
                let url = MyGlobleSetting.url + '/api/control/post/bookrooms';
                /* console.log(Bookroom_form); */
                axios.post(url, Bookroom_form).then(response => {
                    if (response.data.error == null) {
                        alert('Book room success');
                        if (localStorage.Book_Room_Form_Input_Name!=null) {
                            delete localStorage.Book_Room_Form_Input_Name;
                        }
                        if (localStorage.Book_Room_Form_Input_Date_Of_Birth!=null) {
                            delete localStorage.Book_Room_Form_Input_Date_Of_Birth;
                        }
                        if (localStorage.Book_Room_Form_Input_CCCD!=null) {
                            delete localStorage.Book_Room_Form_Input_CCCD;
                        }
                        if (localStorage.Book_Room_Form_Input_Phone!=null) {
                            delete localStorage.Book_Room_Form_Input_Phone;
                        }
                        if (localStorage.Book_Room_Form_Input_Number_Of_People!=null) {
                            delete localStorage.Book_Room_Form_Input_Number_Of_People;
                        }
                        if (localStorage.Book_Room_Form_Input_Number_Of_Days_Stay!=null) {
                            delete localStorage.Book_Room_Form_Input_Number_Of_Days_Stay;
                        }
                        if (localStorage.Book_Room_Form_Input_Room_Code!=null) {
                            delete localStorage.Book_Room_Form_Input_Room_Code;
                        }
                        location.reload();
                    } else {
                        alert(response.data.error);
                        location.reload();
                    }
                    this.setState({ loading_save: false });
                });
            }
        }

    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        localStorage[event.target.name]=event.target.value;
        // console.log(event.target.name+" : "+event.target.value);
        event.target.offsetParent.firstChild.classList.remove('text-danger');
        event.target.offsetParent.lastChild.classList.remove('border-danger');
    }

    render() {

        return (
            <>
                <CCard className='mb-1'>
                    <CCardBody>
                        <CContainer>
                            <CRow className="border border-dark p-4">
                                <CCol xs={12} lg={5}>
                                    <div className="h-100">
                                        <CRow className="border border-dark">
                                            <CCol className="mb-3 mt-3">
                                                <CFormLabel htmlFor="Find_code_FormControlInput1">Reservation code or phone number</CFormLabel>
                                                <CInputGroup>
                                                    <CFormInput type="text" id="Find_code_FormControlInput" name="Find_code_FormControlInput" placeholder="Reservation code or phone number" onChange={(event) => this.isChange(event)} />
                                                    <CButton type="submit" className="float-right" onClick={(event) => this.find(event)} disabled={this.state.loading_find}>
                                                        {this.state.loading_find && <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></>}
                                                        {!this.state.loading_find && <><i className="far fa-search"></i></>}
                                                    </CButton>
                                                </CInputGroup>
                                            </CCol>
                                        </CRow>
                                        <CRow className='mt-4 border border-dark' style={{minHeight:"maxConten"}}>
                                            <CTable>
                                                <CTableHead>
                                                    <CTableRow>
                                                        <CTableHeaderCell scope='col'>Reservation code</CTableHeaderCell>
                                                        <CTableHeaderCell scope='col'>Name</CTableHeaderCell>
                                                        <CTableHeaderCell scope='col'>Phone</CTableHeaderCell>
                                                        <CTableHeaderCell scope='col'>Registration Date</CTableHeaderCell>
                                                    </CTableRow>
                                                </CTableHead>
                                            </CTable>
                                        </CRow>
                                    </div>
                                </CCol>
                                <CCol xs={12} lg={1} style={{ minHeight: '1rem' }} />
                                <CCol xs={12} lg={6} className="border border-dark">
                                    <CRow xs={{ cols: 1 }}>
                                        <CCol xs={12} id="Book_Room_Form_Container_Name" className="mb-3 mt-3">
                                            <CFormLabel htmlFor="Book_Room_Form_Input_Name">Full name</CFormLabel>
                                            <CFormInput type="text" name="Book_Room_Form_Input_Name" onChange={this.isChange} defaultValue={this.state.Book_Room_Form_Input_Name} placeholder="Nguyen Van A" />
                                        </CCol>
                                        <CCol xs={12} id="Book_Room_Form_Container_Date_Of_Birth" className="mb-3 mt-2">
                                            <CFormLabel htmlFor="Book_Room_Form_Input_Date_Of_Birth">Date of birth</CFormLabel>
                                            <CFormInput type="date" name="Book_Room_Form_Input_Date_Of_Birth" onChange={this.isChange} defaultValue={this.state.Book_Room_Form_Input_Date_Of_Birth} placeholder="dd/mm/yyyy" />
                                        </CCol>
                                        <CCol xs={12} id="Book_Room_Form_Container_CCCD" className="mb-3 mt-2">
                                            <CFormLabel htmlFor="Book_Room_Form_Input_CCCD">CCCD/CMND/Passport</CFormLabel>
                                            <CFormInput type="number" name="Book_Room_Form_Input_CCCD" onChange={this.isChange} defaultValue={this.state.Book_Room_Form_Input_CCCD} placeholder="123456789" min='100000000' max='9999999999' />
                                        </CCol>
                                        <CCol xs={12} id="Book_Room_Form_Container_Phone" className="mb-3 mt-2">
                                            <CFormLabel htmlFor="Book_Room_Form_Input_Phone">Number phone</CFormLabel>
                                            <CFormInput type="number" name="Book_Room_Form_Input_Phone" onChange={this.isChange} defaultValue={this.state.Book_Room_Form_Input_Phone} placeholder="0123456789" min='10000000' max='9999999999' />
                                        </CCol>
                                        <CCol xs={12} id="Book_Room_Form_Container_Number_Of_People" className="mb-3 mt-2">
                                            <CFormLabel htmlFor="Book_Room_Form_Input_Number_Of_People">Number Of People</CFormLabel>
                                            <CFormInput type="number" name="Book_Room_Form_Input_Number_Of_People" onChange={this.isChange} defaultValue={this.state.Book_Room_Form_Input_Number_Of_People} min='1' max='50' />
                                        </CCol>
                                        <CCol xs={12} id="Book_Room_Form_Container_Number_Of_Days_Stay" className="mb-3 mt-2">
                                            <CFormLabel htmlFor="Book_Room_Form_Input_Number_Of_Days_Stay">Number Of Days Stay</CFormLabel>
                                            <CFormInput type="number" name="Book_Room_Form_Input_Number_Of_Days_Stay" onChange={this.isChange} defaultValue={this.state.Book_Room_Form_Input_Number_Of_Days_Stay} min='1' max='50' />
                                        </CCol>
                                        <CCol xs={12} id="Book_Room_Form_Container_Room_Code" className="mb-3 mt-2">
                                            <CFormLabel htmlFor="Book_Room_Form_Input_Room_Code">Room Code</CFormLabel>
                                            <CFormSelect defaultValue='0' name="Book_Room_Form_Input_Room_Code" onChange={this.isChange}>
                                                {this.option()}
                                                <option value='0' disabled></option>
                                            </CFormSelect>
                                        </CCol>
                                        <CCol xs={12} className="mb-3 mt-2">
                                            <CButton type="submit" className="float-right" id="btn_save" onClick={(event) => this.save(event)} disabled={this.state.loading_save} >
                                                {this.state.loading_save && <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...</>}
                                                {!this.state.loading_save && <>Save <i className="fas fa-save"></i></>}
                                            </CButton>
                                        </CCol>
                                    </CRow>
                                </CCol>
                            </CRow>
                        </CContainer>
                    </CCardBody>
                </CCard>
            </>
        )
    }
}
export default Bookroom
/**
 * cần thêm bảng hiện thị mã đặt phòng trước
 * và xuất ra thông tin đã đăng ký trước vào form bên cạnh
 * làm bảng và phân trang
 *  */
