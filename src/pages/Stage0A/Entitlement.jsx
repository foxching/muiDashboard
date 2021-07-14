import React from 'react'
import { Box, Grid } from '@material-ui/core';
import PageHeader from '../../components/Common/PageHeader';
import RightPane from '../../components/Stage/RightPane';


export default function Entitlement() {
    return (
        <Box mt={8}>
            <PageHeader label="Ching" />
            <Grid container spacing={1}>
                <Grid item xs={12} sm={8}>
                    Fuck you Ruth
                </Grid>
                <RightPane />
            </Grid>
        </Box>
    )
}
