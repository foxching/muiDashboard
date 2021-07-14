import React from 'react'
import { Box, Paper, Grid, Typography, Hidden } from '@material-ui/core'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PageHeader from '../components/Common/PageHeader'
import { useStyles } from "../styles/projectStaginStyle"
import SideNav from '../components/Header/SideNav';
import RightPane from '../components/Stage/RightPane';

export default function ProjectStaging() {
    const classes = useStyles()
    return (
        <Box mt={8}>
            <Grid container spacing={1}>
                <Grid item container xs={12} sm={8}>

                </Grid>

                <Grid item xs={12} sm={4}>
                    <RightPane />
                </Grid>
            </Grid>

        </Box>
    )
}
