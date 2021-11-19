import React from 'react'

/* const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography')) */


const routes = [
  { path: '/'},
  { path: '/rooms', name: 'Rooms',/*  component: Dashboard  */},
  { path: '/rooms/book-room', name: 'Book room',/*  component: Dashboard  */},
  { path: '/rooms/information-room', name: 'Information room',/*  component: Dashboard  */},
  { path: '/rooms/information-book-room-reserve', name: 'Information reserve',/*  component: Dashboard  */},
  { path: '/rooms/edit-book-room-reserve', name: 'Edit reserve',/*  component: Dashboard  */},
]

export default routes
