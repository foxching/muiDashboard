import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { useStyles } from "../../styles/pageHeaderStyle"



export default function PageHeader({ label, pageTitle }) {
    const classes = useStyles()
    return (
        <Box mt={8}>
            <Grid container>
                <Grid item xs={12} sm={12}>
                    <Typography variant="body2" className={classes.pageSubtitle}>{label}</Typography>
                    <Typography variant="h5" className={classes.pageTitle}>{pageTitle}</Typography>
                </Grid>
            </Grid>
        </Box>

    )
}
