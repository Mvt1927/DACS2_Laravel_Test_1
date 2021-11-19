import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
// const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
// const Typography = React.lazy(() => import('./views/theme/typography/Typography'))


const routes = [
  { path: '/', name:'Dashboard', alive:true, component: Dashboard },
  { path: '/rooms', name: 'Rooms',alive:false/*  component: Dashboard */ },
  { path: '/rooms/book-room', name: 'Book room',alive:false/*  component: Dashboard */ },
  { path: '/rooms/information-room', name: 'Information room',alive:false /* component: Dashboard */ },
  { path: '/rooms/information-book-room-reserve', name: 'Information reserve', alive:false/* component: Dashboard  */},
  { path: '/rooms/edit-book-room-reserve', name: 'Edit reserve',alive:false /* component: Dashboard  */},
]

export default routes
