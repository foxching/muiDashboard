import React, { useState, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Box } from '@material-ui/core'
import Navbar from './Navbar'
import SideNav from './SideNav'
import Dashboard from '../../pages/Dashboard'
import Digitalization from '../../pages/Digitalization'
import Project from "../../pages/Project";
import Agile from '../../pages/Agile'
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
                    <Route exact path='/digitalization' component={Digitalization} />
                    <Route exact path='/project' component={Project} />
                    <Route exact path='/agile' component={Agile} />
                    <Route exact path='/admin' component={Notification} />
                    <Route exact path='/logout' component={Logout} />
                </Switch>
            </Box>
        </Fragment>
    )
}
