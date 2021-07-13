import React, { useState, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Box } from '@material-ui/core'
import Navbar from './Navbar'
import SideNav from './SideNav'
import Blog from '../../pages/Blog'
import Dashboard from '../../pages/Dashboard'
import Link from '../../pages/Link'
import Notification from '../../pages/Notification'
import Logout from "../../pages/Logout"
import { useStyles } from '../../styles/headerStyle'

export default function Header() {
    const classes = useStyles()

    const [mobileOpen, setMobileIsOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileIsOpen(!mobileOpen)
    }

    const handleDrawerClose = () => {
        setMobileIsOpen(false)
    }

    return (
        <Fragment>
            <Navbar handleDrawerToggle={handleDrawerToggle} />
            <SideNav mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} handleDrawerClose={handleDrawerClose} />
            <Box className={classes.wrapper}>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path='/digitalization' component={Blog} />
                    <Route exact path='/agile' component={Link} />
                    <Route exact path='/admin' component={Notification} />
                    <Route exact path='/logout' component={Logout} />
                </Switch>
            </Box>

        </Fragment>
    )
}