import React from 'react'
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
    {
        component: CNavItem,
        name: 'Dashboard',
        to: '/',
        icon: <i className="fal fa-tachometer-alt-fast mr-2"></i>,
    },
    {
        component: CNavGroup,
        name: 'Rooms',
        to: '/rooms',
        icon: <i className="fal fa-bed mr-2"></i>,
        items: [
            {
                component: CNavItem,
                name: 'Booking',
                to: '/rooms/book-room',
            },
            {
                component: CNavItem,
                name: 'Room information',
                to: '/rooms/information-room',
            },
            {
                component: CNavItem,
                name: 'Preset booking information',
                to: '/rooms/information-book-room-reserve',
            },
            {
                component: CNavItem,
                name: 'Edit booking',
                to: '/rooms/edit-booking',
            },

        ],
    },
]

export default _nav
