import React, { useState, useEffect } from 'react'
import { Box, Grid, Card, CardContent, Typography } from '@material-ui/core'
import { GeneralCardGraph } from "../Common/DisplayCardGraph"
import { useStyles } from "../../styles/dashboardStyle"
import { fakeArrayGenerator } from '../../utils/fakeArrayGenerator'
import { blue, red } from '@material-ui/core/colors'

export default function UserOverview() {
    const classes = useStyles()
    const [fetched, setIsFetched] = useState(false)

    const graphData =
        [
            {
                id: "userGraph",
                type: "line",
                datasets: [
                    {
                        label: "Current Month",
                        data: fakeArrayGenerator({ count: 30, digit: 100 }),
                        backgroundColor: "rgba(21, 101, 192, 0.6)",
                        borderColor: blue['A200'],
                        fill: true,
                        tension: 0.5
                    },
                    {
                        label: "Last  Month",
                        data: fakeArrayGenerator({ count: 30, digit: 100 }),
                        backgroundColor: "rgba(198, 40, 40, 0.6)",
                        borderColor: red['A200'],
                        fill: true,
                        tension: 0.5
                    }
                ],
                xAxisLabels: ["week1", "week2", "week3", "week4", "week5"]
            },
            {
                id: "userPie",
                type: "pie",
                datasets: [
                    {
                        label: "Device Monitoring",
                        data: fakeArrayGenerator({ count: 3, digit: 100 }),
                        backgroundColor: [blue[100], blue[200], blue[300], blue[400]],
                        borderColor: blue['A200'],
                        fill: true,
                        tension: 0.5
                    },

                ],
                xAxisLabels: ["Philippines", "India", "China"]
            }
        ]

    useEffect(() => {
        if (!fetched) {
            graphData.map(item => GeneralCardGraph({
                id: item.id,
                type: item.type,
                datasets: item.datasets,
                xAxisLabels: item.xAxisLabels
            }))
            setIsFetched(true)
        }
    }, [fetched])


    return (
        <Box className={classes.section}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={7} >
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h6">
                                Project Overview
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <canvas id="userGraph" className={classes.userGraph}></canvas>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={5} >
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h6">
                                Region Overview
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <canvas id="userPie" className={classes.userGraph}></canvas>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}
