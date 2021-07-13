import React, { useState } from 'react'
import { Hidden, Drawer } from '@material-ui/core'
import SideNavTab from './SideNavTab'
import { useStyles } from '../../styles/headerStyle'

export default function SideNav({ mobileOpen, handleDrawerToggle, handleDrawerClose }) {
    const classes = useStyles()

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden mdUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor={'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    <SideNavTab handleDrawerClose={handleDrawerClose} />
                </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    <SideNavTab handleDrawerClose={handleDrawerClose} />
                </Drawer>
            </Hidden>
        </nav>
    )
}
