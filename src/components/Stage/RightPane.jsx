import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { Box, Collapse, Button, Divider, Paper, Typography } from '@material-ui/core'

import { List, ListItem, ListItemText } from '@material-ui/core'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useStyles } from '../../styles/projectStaginStyle'
import { checklist } from "../../data/checklist"

export default function RightPane() {
    const classes = useStyles()

    const [open, setOpen] = useState({})

    const handleClick = (e) => {
        setOpen({ [e]: !open[e] })
    }


    return (
        <Paper className={classes.rightWrapper}>
            <Box mt={-2}>
                <Typography variant="h6" color="textSecondary" align="center" gutterBottom>Project CheckList</Typography>
            </Box>
            <Divider />
            <Box style={{ maxHeight: "50px", overflow: "hidden", overflowY: "auto", width: "320px" }}>
                <Typography>
                    quas?
                </Typography>
            </Box>

        </Paper>
    )
}
