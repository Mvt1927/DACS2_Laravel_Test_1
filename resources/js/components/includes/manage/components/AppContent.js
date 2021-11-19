import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'

const AppContent = () => {
   /*  const NonContainer = () => {
        if (routes.alive==true) {
            return (
                <CContainer lg>
                    <Suspense fallback={<CSpinner color="primary" />}>
                        <Switch>
                            {routes.map((route, idx) => {
                                return (
                                    route.component && (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={(props) => (
                                                <>
                                                    <route.component {...props} />
                                                </>
                                            )}
                                        />
                                    )
                                )
                            })}

                        </Switch>
                    </Suspense>
                </CContainer>
            )
        } else {
            return (
                <CContainer lg>
                    <Suspense fallback={<CSpinner color="primary" />}>
                        <Switch>
                            {routes.map((route, idx) => {
                                return (
                                    route.component && (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={(props) => (
                                                <>
                                                    <route.component {...props} />
                                                </>
                                            )}
                                        />
                                    )
                                )
                            })}

                        </Switch>
                    </Suspense>
                </CContainer>
            )
        }
    } */
    return (
        <CContainer lg>
                    <Suspense fallback={<CSpinner color="primary" />}>
                        <Switch>
                            {routes.map((route, idx) => {
                                return (
                                    route.component && (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={(props) => (
                                                <>
                                                    <route.component {...props} />
                                                </>
                                            )}
                                        />
                                    )
                                )
                            })}

                        </Switch>
                    </Suspense>
                </CContainer>
    )
}

export default AppContent
