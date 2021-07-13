import React, { useState } from 'react'
import { Avatar, Button, ListItem, ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import image from "./me.jpg"
import { useStyles } from '../../../styles/headerStyle';

const dropDownData = [
    {
        label: "settings", icon: <SettingsIcon />
    },
    {
        label: "logout", icon: <ExitToAppIcon />
    }
]
export default function Profile() {
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
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="inherit" startIcon={<Avatar src={image} className={classes.navAvatar}></Avatar>}>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {dropDownData.map((item, i) => (
                    <MenuItem component={ListItem} onClick={handleClose}>
                        <ListItemIcon >{item.icon}</ListItemIcon>
                        <ListItemText>{item.label}</ListItemText>
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}
