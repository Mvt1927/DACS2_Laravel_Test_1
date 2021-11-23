import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Bookroom = React.lazy(() => import('./views/rooms/bookroom/Bookroom.js'))

// const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
// const Typography = React.lazy(() => import('./views/theme/typography/Typography'))


const routes = [
  { path: '/', name:'Dashboard', component: Dashboard, exact: true},
  { path: '/rooms', name: 'Rooms',component: Bookroom, exact: true},
  { path: '/rooms/book-room', name: 'Book room', component: Bookroom },
  { path: '/rooms/information-room', name: 'Information room'},
  { path: '/rooms/information-book-room-reserve', name: 'Information reserve'},
  { path: '/rooms/edit-book-room-reserve', name: 'Edit reserve'},
]

export default routes
