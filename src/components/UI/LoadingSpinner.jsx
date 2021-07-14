import React from 'react'
import { Box, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    spinnerWrapper: {
        width: "100%",
        display: "flex",
        minHeight: "250px",
        flexFlow: "row wrap",
        justifyContent: 'center',
        alignItems: "center"
    }
}));

export default function LoadingSpinner() {
    const classes = useStyles()
    return (
        <Box className={classes.spinnerWrapper}>
            <CircularProgress />
        </Box>
    )
}
