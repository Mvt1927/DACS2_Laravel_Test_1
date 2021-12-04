import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Bookroom = React.lazy(() => import('./views/rooms/bookroom/Bookroom'))
const Inforoom = React.lazy(() => import('./views/rooms/room_info/room_info'))
const InfoBooking = React.lazy(() => import('./views/rooms/info_booking/booking_info'))
const EditBooking = React.lazy(() => import('./views/rooms/edit_booking/Edit_Booking'))


// const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
// const Typography = React.lazy(() => import('./views/theme/typography/Typography'))


const routes = [
  { path: '/', name:'Dashboard', component: Dashboard, exact: true},
  { path: '/rooms', name: 'Rooms',component: Bookroom, exact: true},
  { path: '/rooms/book-room', name: 'Book room', component: Bookroom },
  { path: '/rooms/information-room', name: 'Information room', component: Inforoom},
  { path: '/rooms/information-book-room-reserve', name: 'Information reserve',component: InfoBooking},
  { path: '/rooms/edit-booking', name: 'Edit booking',component: EditBooking},
]

export default routes
