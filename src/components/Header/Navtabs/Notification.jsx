import React, { useState } from 'react'
import { Avatar, Badge, IconButton, List, ListItem, ListItemIcon, ListItemText, Menu, } from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useStyles } from '../../../styles/headerStyle';

const dropDownData = [
    { label: "Rechie", description: "likes your feds" },
    { label: "Analyn", description: "likes your feds" },
    { label: "James", description: "comment on your feds" },

]
export default function Notification() {
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <IconButton aria-controls="notification" aria-haspopup="true" onClick={handleClick} color="inherit" >
                <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <Menu
                id="notification"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <List className={classes.list}>
                    {dropDownData.map((item, i) => (
                        <ListItem key={i} component={ListItem} onClick={handleClose}>
                            <ListItemIcon><Avatar className={classes.uiAvatar}>{item.label[0].toUpperCase()}</Avatar></ListItemIcon>
                            <ListItemText primary={item.label} secondary={item.description}></ListItemText>
                        </ListItem>
                    ))}
                </List>

            </Menu>
        </>
    )
}
