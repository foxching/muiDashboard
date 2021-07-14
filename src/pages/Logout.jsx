import React from 'react'
import { Box } from '@material-ui/core'
import PageHeader from "../components/Common/PageHeader"

export default function Logout() {
    return (
        <Box>
            <PageHeader label="Logout" pageTitle="Please login to coninue" />
        </Box>
    )
}
