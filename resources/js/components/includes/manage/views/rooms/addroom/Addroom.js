import { CButton, CCard, CCardBody, CCol, CContainer, CForm, CFormInput, CFormLabel, CFormSelect, CFormTextarea, CInputGroup, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import axios from "axios";
import React, { Component, useState } from "react";
import Option from "./Option";
import MyGlobleSetting from "../MyGlobleSetting";
class Addroom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading_save: false,
            image: null,
            Name:"",
            Star: '5',
            Price: '',
            Defprice: '',
            Type: '1',
            Info: "",
        }
    }
    componentDidMount() {

    }
    save = (event) => {
        this.setState({
            loading_save: true,
        })
        const formData = new FormData()
        formData.append('name', this.state.Name);
        formData.append('file', this.state.image);
        formData.append('star', this.state.Star);
        formData.append('price', this.state.Price);
        formData.append('defprice', this.state.Defprice);
        formData.append('type', this.state.Type);
        formData.append('info', this.state.Info);
        axios.post(MyGlobleSetting.url + '/api/control/post/add-rooms', formData).then(response => {
            alert("Add room success !");
        }).catch(error => {
            alert(error.response.data.error);
        })
        this.setState({
            loading_save: false,
        })
    }
    isChange = (event) => {
        this.setState({
            image: event.target.files[0],
        })
    }
    isChange2 = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    render() {
        return (
            <>
                <CCard className='mb-1'>
                    <CCardBody>
                        <CContainer>
                            <CRow className="border border-dark p-4 justify-content-center ">
                                <CCol xs={12} lg={8} className="border border-dark">
                                    <CRow xs={{ cols: 1 }}>
                                        <CCol xs={12} id="Book_Room_Form_Container_Name" className="mb-1 mt-2">
                                            <CFormLabel htmlFor="Name">Room name</CFormLabel>
                                            <CFormInput type="text" name="Name" placeholder="room a" onChange={event => this.isChange2(event)} />
                                        </CCol>
                                        <CCol xs={12} id="Book_Room_Form_Container_Image" className="mb-1 mt-1">
                                            <CFormLabel htmlFor="Image">Image</CFormLabel>
                                            <CFormInput type="file" name="Image" onChange={event => {
                                                /* console.log(event); */
                                                this.isChange(event);
                                            }} />
                                        </CCol>
                                        <CCol xs={12} id="Book_Room_Form_Container_Star" className="mb-1 mt-1">
                                            <CFormLabel htmlFor="Star">Star</CFormLabel>
                                            <CFormSelect type="number" name="Star" defaultValue="5" onChange={event => this.isChange2(event)}>
                                                <option value='1'>1</option>
                                                <option value='2'>2</option>
                                                <option value='3'>3</option>
                                                <option value='4'>4</option>
                                                <option value='5'>5</option>
                                            </CFormSelect>
                                        </CCol>
                                        <CCol xs={12} id="Book_Room_Form_Container_Price" className="mb-1 mt-1">
                                            <CFormLabel htmlFor="Price">Price</CFormLabel>
                                            <CFormInput type="number" name="Price" placeholder="0" min='1' max='9999999999' onChange={event => this.isChange2(event)} />
                                        </CCol>
                                        <CCol xs={12} id="Book_Room_Form_Container_Defprice" className="mb-1 mt-1">
                                            <CFormLabel htmlFor="Defprice">Initial price</CFormLabel>
                                            <CFormInput type="number" name="Defprice" placeholder="0" min='1' max='9999999999' onChange={event => this.isChange2(event)} />
                                        </CCol>
                                        <CCol xs={12} id="Book_Room_Form_Container_Type" className="mb-1 mt-1">
                                            <CFormLabel htmlFor="Type">Type</CFormLabel>
                                            <CFormInput type="number" name="Type" placeholder="0" min='1' max='10' onChange={event => this.isChange2(event)} />
                                        </CCol>
                                        <CCol xs={12} id="Book_Room_Form_Container_Info" className="mb-1 mt-1">
                                            <CFormLabel htmlFor="Info">Info</CFormLabel>
                                            <CFormTextarea  name="Info" onChange={event => this.isChange2(event)} />
                                        </CCol>
                                        <CCol xs={12} className="mb-1 mt-1">
                                            <CButton type="submit" className="float-right" id="btn_save" onClick={(event) => this.save(event)} disabled={this.state.loading_save} >
                                                {this.state.loading_save && <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...</>}
                                                {!this.state.loading_save && <>Add <i className="fas fa-save"></i></>}
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
export default Addroom
/**
 *
 * ok xong
 *
 *  */
