import { CButton, CCard, CCardBody, CCol, CContainer, CForm, CFormInput, CFormLabel, CFormTextarea, CRow } from "@coreui/react";
import React from "react";
const Bookroom = () => {
    return (
        <>
            <CCard className='mb-4'>
                <CCardBody>
                    <CContainer>
                        <CRow className="border border-dark p-4">
                            <CCol xs={12} lg={5}>
                                <div>
                                    <CRow className="border border-dark">
                                        <CForm>
                                            <CCol className="mb-3 mt-2">
                                                <CFormLabel htmlFor="Find_code_FormControlInput1">Bookroom reserve code or number phone</CFormLabel>
                                                <CFormInput type="text" id="Find_code_FormControlInput1" placeholder="Bookroom reserve code or number phone"/>
                                            </CCol>
                                            <CCol lg="auto">
                                                <CButton type="submit" className="float-right mb-3">Find <i class="far fa-search"></i></CButton>
                                            </CCol>
                                        </CForm>
                                    </CRow>
                                    <CRow className='mt-4 border border-dark'>
                                       table
                                    </CRow>
                                </div>
                            </CCol>
                            <CCol xs={12} lg={1} style={{ minHeight: '1rem' }} />
                            <CCol xs={12} lg={6} className="border border-dark">
                                <CRow>
                                    form nhap thong tin phong
                                </CRow>
                            </CCol>
                        </CRow>
                    </CContainer>
                </CCardBody>
            </CCard>
        </>
    )
}
export default Bookroom
