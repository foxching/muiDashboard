import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField, Input } from '@material-ui/core';

export default function Searchbar() {
    return (
        <Box mt={3}>
            <form noValidate autoComplete="off" >
                <Input placeholder="Search.."/>
            </form >
        </Box>

    )
}
