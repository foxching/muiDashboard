import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard'
import BookIcon from '@material-ui/icons/Book'
import PostAddIcon from '@material-ui/icons/PostAdd';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useStyles } from '../../styles/headerStyle'

const navItemData = [
    { label: "Dashboard", path: "/", icon: <DashboardIcon /> },
    { label: "Digitilazation", path: "/digitalization", icon: <BookIcon /> },
    { label: "Agile ", path: "/agile", icon: <PostAddIcon /> },
    { label: "Admin", path: "/admin", icon: <SupervisorAccountIcon /> },
    { label: "Logout", path: "/logout", icon: <ExitToAppIcon /> },

]
export default function SideNavTab({ handleDrawerClose }) {
    const classes = useStyles()
    return (
        <List>
            {navItemData.map((item, i) => (
                <Button size="small" onClick={handleDrawerClose} className={classes.navButton}>
                    <ListItem exact key={i} component={NavLink} to={item.path} className={classes.navLinks} activeClassName={classes.activeNavLinks}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.label}></ListItemText>
                    </ListItem>
                </Button>
            ))}
        </List>
    )
}
