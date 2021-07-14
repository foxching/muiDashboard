import React from 'react'
import { Box, IconButton, Grid, Typography } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useStyles } from '../../styles/footerStyle'


export default function Footer() {
    const classes = useStyles()
    return (
        <Box className={classes.footer}>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body1" color="textSecondary" align="center">
                        Created by {""}
                        <IconButton>
                            <FavoriteIcon color="secondary" />
                        </IconButton>
                        Global Automation
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="body1" color="textSecondary" align="center" style={{ marginTop: "10px" }}>All Right Reserved 2021</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}
