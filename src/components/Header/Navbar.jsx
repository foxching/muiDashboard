import React from 'react'
import { AppBar, Toolbar, Typography, Box, IconButton, Hidden } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Profile from '../Header/Navtabs/Profile'
import Notification from './Navtabs/Notification';
import Messages from "./Navtabs/Messages"
import { useStyles } from '../../styles/headerStyle'


export default function Navbar({ handleDrawerToggle }) {
    const classes = useStyles()
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="inherit">
                    {"<Automation/>"}
                </Typography>
                <Hidden smDown>
                    <Box style={{ display: "flex" }}>
                        <Notification />
                        <Messages />
                        <Profile />
                    </Box>
                </Hidden>
                <Hidden mdUp>
                    <IconButton color='inherit' onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}
