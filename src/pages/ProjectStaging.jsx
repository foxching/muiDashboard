import React from 'react'
import { Box, Grid, } from '@material-ui/core'
import RightPane from '../components/Stage/RightPane';
import PageHeader from "../components/Common/PageHeader"

export default function ProjectStaging() {


    return (
        <Box mt={8}>
            <PageHeader label="Ching" />
            <Grid container spacing={1}>
                <Grid item xs={12} sm={8}>
                    Left Column
                </Grid>
                <RightPane />
            </Grid>
        </Box>
    )
}
