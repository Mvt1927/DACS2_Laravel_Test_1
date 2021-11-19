import React from 'react'
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavGroup,
    name: 'Rooms',
    to: '/rooms',
    items: [
      {
        component: CNavItem,
        name: 'Book',
        to: '/rooms/book-room',
      },
      {
        component: CNavItem,
        name: 'Information',
        to: '/rooms/information-room',
      },
      {
        component: CNavItem,
        name: 'Information reserve',
        to: '/rooms/information-book-room-reserve',
      },
      {
        component: CNavItem,
        name: 'Edit reserve',
        to: '/rooms/edit-book-room-reserve',
      },

    ],
  },
]

export default _nav
