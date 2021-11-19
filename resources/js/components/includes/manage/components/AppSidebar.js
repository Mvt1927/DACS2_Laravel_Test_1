import React from 'react'
import MyGlobleSetting from '../MyGlobleSetting'
import { AppSidebarNav } from './AppSidebarNav'
import { useSelector, useDispatch } from 'react-redux'
import SimpleBar from 'simplebar-react'
import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import navigation from '../_nav'

// sidebar nav config

const AppSidebar = () => {
    const dispatch = useDispatch()
    const unfoldable = useSelector((state) => state.sidebarUnfoldable)
    const sidebarShow = useSelector((state) => state.sidebarShow)
    return (
        <CSidebar
            position="fixed"
            unfoldable={unfoldable}
            visible={sidebarShow}
            onVisibleChange={(visible) => {
                dispatch({ type: 'set', sidebarShow: visible })
            }}
        >
            <div className="sidebar-brand d-none d-md-flex">
                <img className="d-block m-3"
                    src={MyGlobleSetting.url + '/resources/Image/icon/logo/DACS2_Logo/Classic_Logo/white/Logo_classic_white.png'}
                    alt="" height="33" />
                <img className="d-block m-3"
                    src={MyGlobleSetting.url + '/resources/Image/icon/logo/DACS2_Logo/Classic_hotel_Logo/white/Clasic_hotel_logo_white.png'}
                    alt="" height="33" />
            </div>
            <CSidebarNav>
                <SimpleBar>
                    <AppSidebarNav items={navigation} />
                </SimpleBar>
            </CSidebarNav>
        </CSidebar>

    )
}

export default AppSidebar
