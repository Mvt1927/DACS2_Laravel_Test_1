import { CButton, CCard, CCardBody, CCol, CContainer, CForm, CFormInput, CFormLabel, CFormSelect, CFormTextarea, CInputGroup, CRow } from "@coreui/react";
import axios from "axios";
import React, { Component } from "react";
import Option from "./Option";
import MyGlobleSetting from "../MyGlobleSetting";
class Bookroom extends Component {
    constructor(props) {
        super(props);
        this.state={
            options: ''
        }
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
    option(){
        var num=0;
        if (this.state.options instanceof Array) {
            return this.state.options.map(function (object, i) {
                num++;
                return <Option obj={object} key={i} num={num} />;
            })
        }
    }
    render() {
        return (
            <>
                <CCard className='mb-1'>
                    <CCardBody>
                        <CContainer>
                            <CRow className="border border-dark p-4">
                                <CCol xs={12} lg={5}>
                                    <div>
                                        <CRow className="border border-dark">
                                            <CCol className="mb-3 mt-3">
                                                <CFormLabel htmlFor="Find_code_FormControlInput1">Bookroom reserve code or number phone</CFormLabel>
                                                <CInputGroup>
                                                    <CFormInput type="text" id="Find_code_FormControlInput1" placeholder="Bookroom reserve code or number phone" />
                                                    <CButton type="submit" className="float-right">Find <i className="far fa-search"></i></CButton>
                                                </CInputGroup>
                                            </CCol>
                                        </CRow>
                                        <CRow className='mt-4 border border-dark'>
                                            table
                                        </CRow>
                                    </div>
                                </CCol>
                                <CCol xs={12} lg={1} style={{ minHeight: '1rem' }} />
                                <CCol xs={12} lg={6} className="border border-dark">
                                    <CRow xs={{ cols: 1 }}>
                                        <CCol xs={12} className="mb-3 mt-3">
                                            <CFormLabel htmlFor="Book_Room_Form_Input_Name">First and last name</CFormLabel>
                                            <CFormInput type="text" id="Book_Room_Form_Input_Name" placeholder="Nguyen Van A" />
                                        </CCol>
                                        <CCol xs={12} className="mb-3 mt-2">
                                            <CFormLabel htmlFor="Book_Room_Form_Input_Date_Of_Birth">Date of birth</CFormLabel>
                                            <CFormInput type="date" id="Book_Room_Form_Input_Date_Of_Birth" placeholder="dd/mm/yyyy" />
                                        </CCol>
                                        <CCol xs={12} className="mb-3 mt-2">
                                            <CFormLabel htmlFor="Book_Room_Form_Input_CCCD">CCCD/CMND/Passport</CFormLabel>
                                            <CFormInput type="number" id="Book_Room_Form_Input_CCCD" placeholder="123456789" min='100000000' max='9999999999' />
                                        </CCol>
                                        <CCol xs={12} className="mb-3 mt-2">
                                            <CFormLabel htmlFor="Book_Room_Form_Input_Phone">Number phone</CFormLabel>
                                            <CFormInput type="number" id="Book_Room_Form_Input_Phone" placeholder="0123456789" min='10000000' max='9999999999' />
                                        </CCol>
                                        <CCol xs={12} className="mb-3 mt-2">
                                            <CFormLabel htmlFor="Book_Room_Form_Input_Number_Of_People">Number Of People</CFormLabel>
                                            <CFormInput type="number" id="Book_Room_Form_Input_Number_Of_People" defaultValue='1' min='1' max='50' />
                                        </CCol>
                                        <CCol xs={12} className="mb-3 mt-2">
                                            <CFormLabel htmlFor="Book_Room_Form_Input_Number_Of_Days_Stay">Number Of Days Stay</CFormLabel>
                                            <CFormInput type="number" id="Book_Room_Form_Input_Number_Of_Days_Stay" defaultValue='1' min='1' max='50' />
                                        </CCol>
                                        <CCol xs={12} className="mb-3 mt-2">
                                            <CFormLabel htmlFor="Book_Room_Form_Input_Room_Code">Room Code</CFormLabel>
                                            <CFormSelect defaultValue='0'>
                                                {this.option()}
                                                <option value='0' disabled></option>
                                            </CFormSelect>
                                        </CCol>
                                        <CCol xs={12} className="mb-3 mt-2">
                                            <CButton type="submit" className="float-right">Save <i className="fas fa-save"></i></CButton>
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
 *
 *  */
