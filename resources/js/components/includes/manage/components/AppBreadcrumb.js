import React from 'react'
import { useLocation } from 'react-router-dom'

import routes from '../routes'

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'
import MyGlobleSetting from '../views/dashboard/MyGlobleSetting'

const AppBreadcrumb = () => {
    const currentLocation = useLocation().pathname
    const getRouteName = (pathname, routes) => {
        const currentRoute = routes.find((route) => route.path === pathname)
        return currentRoute.name
    }

    const getBreadcrumbs = (location) => {
        const breadcrumbs = []
        location.split('/').reduce((prev, curr, index, array) => {
            const currentPathname = `${prev}/${curr}`
            breadcrumbs.push({
                pathname: currentPathname,
                name: getRouteName(currentPathname, routes),
                active: index + 1 === array.length ? true : false,
            })
            return currentPathname
        })
        return breadcrumbs
    }
    const NonDashBoard = () => {
        if (location.hash != '#/') {
            // console.log(location.hash);
            return (
                <CBreadcrumbItem href="dashboard#">Dashboard</CBreadcrumbItem>
            )
        } else {
            // console.log("true");
            return null
        }
    }
    const breadcrumbs = getBreadcrumbs(currentLocation)

    return (
        <CBreadcrumb className="m-0 ms-2">
            <CBreadcrumbItem href="/Classic-Hotel">Home</CBreadcrumbItem>
            <NonDashBoard />
            {breadcrumbs.map((breadcrumb, index) => {
                return (
                    <CBreadcrumbItem
                        {...(breadcrumb.active ? { active: true } : { href: 'dashboard#' + breadcrumb.pathname })}
                        key={index}
                    >
                        {breadcrumb.name}
                    </CBreadcrumbItem>
                )
            })}
        </CBreadcrumb>
    )
}

export default AppBreadcrumb
