import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FiberSmartRecordIcon from '@material-ui/icons/FiberSmartRecord';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import BusinessIcon from '@material-ui/icons/Business';
import { useStyles } from '../../styles/headerStyle'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListIcon from '@material-ui/icons/List';
import FirstPageIcon from '@material-ui/icons/FirstPage';

const navItemData = [
    { label: "Dashboard", path: "/", icon: <DashboardIcon /> },
    { label: "Digitilazation", path: "/digitalization", icon: < EmojiObjectsIcon /> },
    { label: "Project ", path: "/project", icon: <BusinessIcon /> },
    { label: "Agile ", path: "/agile", icon: <FiberSmartRecordIcon /> },
    { label: "Admin", path: "/admin", icon: <SupervisorAccountIcon /> },
    { label: "Logout", path: "/logout", icon: <ExitToAppIcon /> },

]
export default function SideNavTab({ handleDrawerClose }) {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const handleClick = (e) => {
        setOpen(!open)
    }

    return (
        <List>
            {navItemData.map((item, i) => {
                if (item.path === "/project") {
                    return (
                        <>
                            <Button size="small" onClick={handleClick} className={classes.navButton}>
                                <ListItem className={classes.navLinks}>
                                    <ListItemIcon>
                                        <BusinessIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Project" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItem>
                            </Button>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="nav" >
                                    <ListItem exact component={NavLink} to={'/project-list'} className={`${classes.nestedLink} ${classes.navLinks}`} activeClassName={classes.activeNavLinks} >
                                        <ListItemIcon>
                                            <ListIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Project List" />
                                    </ListItem>
                                    <ListItem exact component={NavLink} to={'/project-stage'} className={`${classes.nestedLink} ${classes.navLinks}`} activeClassName={classes.activeNavLinks} >
                                        <ListItemIcon>
                                            <FirstPageIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Stage Movement" />
                                    </ListItem>
                                </List>
                            </Collapse>
                        </>
                    )
                } else {
                    return (
                        <Button key={i} size="small" onClick={handleDrawerClose} className={classes.navButton}>
                            <ListItem exact component={NavLink} to={item.path} className={classes.navLinks} activeClassName={classes.activeNavLinks}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.label}></ListItemText>
                            </ListItem>
                        </Button>
                    )
                }
            })}
        </List >
    )
}
