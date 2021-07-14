import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Box, Collapse, Button, Divider, Paper, Typography, Grid } from '@material-ui/core'

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails'

import { List, ListItem, ListItemText } from '@material-ui/core'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useStyles } from '../../styles/projectStaginStyle'
import { checklist } from "../../data/checklist"

import Sticky from 'react-sticky-el'


export default function RightPane() {
    const classes = useStyles()

    const [open, setOpen] = useState({})

    const handleClick = (e) => {
        setOpen({ [e]: !open[e] })
    }


    return (
        <Grid item xs={12} sm={4}>
            <Paper className={classes.rightWrapper}>
                <Box mt={-5}>
                    <Typography variant="h6" color="textSecondary" align="center" gutterBottom>Project CheckList</Typography>
                </Box>
                <Divider />


            </Paper>
        </Grid>

    )
}
