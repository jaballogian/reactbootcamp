import React from 'react'
import {Link, Switch, Route, useRouteMatch} from 'react-router-dom'
import Info from './Info'
import Settings from './Settings'

function Profile(){
    const {path, url} = useRouteMatch()
    console.log(path, url)

    return(
        <div>
            <h1>This is a profile page</h1>

            <ul>
                <li>
                    <Link to={`${url}/info`}>Go to profile info page</Link>
                </li>

                <li>
                    <Link to={`${url}/settings`}>Go to profile settings page</Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${path}/info`}>
                    <Info/>
                </Route>

                <Route path={`${path}/settings`}>
                    <Settings/>
                </Route>
            </Switch>
        </div>
    )
}

export default Profile