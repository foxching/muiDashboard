import React, { Fragment, useState, useEffect } from 'react'
import { Box, Button, Grid, Card, CardContent, Typography } from '@material-ui/core'
import { DisplayCardGraph } from '../../components/Common/DisplayCardGraph';
import { randomValueGenerator, fakeArrayGenerator } from "../../utils/fakeArrayGenerator"
import { useStyles } from "../../styles/dashboardStyle"
import { indigo, lightGreen, red, green, purple } from '@material-ui/core/colors';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';



export default function CardGraphs() {
    const classes = useStyles()
    const [fetched, setIsFetched] = useState(false)

    const displayData = [
        { label: "Post", value: randomValueGenerator({ digit: 100 }), icon: <ArrowDropDownIcon />, iconLabel: "30%" },
        { label: "Pages", value: randomValueGenerator({ digit: 100 }), icon: <ArrowDropDownIcon />, iconLabel: "20%" },
        { label: "New Visitor", value: randomValueGenerator({ digit: 100 }), icon: <ArrowDropUpIcon />, iconLabel: "15%" },
        { label: "Total Visitor", value: randomValueGenerator({ digit: 100 }), icon: <ArrowDropUpIcon />, iconLabel: "20%" },
    ]

    const cardGraphData = [
        { id: "Post", data: fakeArrayGenerator({ count: 9, digit: 100 }), brColor: indigo[500], bgColor: indigo[50] },
        { id: "Pages", data: fakeArrayGenerator({ count: 9, digit: 100 }), brColor: lightGreen[500], bgColor: lightGreen[50] },
        { id: "New Visitor", data: fakeArrayGenerator({ count: 9, digit: 100 }), brColor: red[500], bgColor: red[50] },
        { id: "Total Visitor", data: fakeArrayGenerator({ count: 9, digit: 100 }), brColor: purple[500], bgColor: purple[50] }
    ]

    useEffect(() => {
        if (!fetched) {
            cardGraphData.map((item, i) => <Fragment key={i}>{DisplayCardGraph({ id: item.id, data: item.data, brColor: item.brColor, bgColor: item.bgColor })}</Fragment>)
            setIsFetched(true)
        }
    }, [fetched])

    return (
        <Box className={classes.section}>
            <Grid container spacing={1}>
                {displayData.map((item, i) => (
                    <Grid item xs={6} sm={3}>
                        <Card className={classes.cardContent}>
                            <CardContent>
                                <canvas id={item.label} className={classes.cardGraph}></canvas>
                                <Typography variant="body2" className={classes.cardLabel}>{item.label}</Typography>
                                <Typography variant="h6" component="h5" className={classes.cardTitle}>{item.value}</Typography>
                                <Typography component="p" style={{ textAlign: "center", marginBottom: "0px" }}>
                                    <Button size="small" className={classes.radioBtn} startIcon={item.icon} style={{ color: item.label[0] === "P" ? green[500] : red[800] }}>{item.iconLabel}</Button>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>

    )
}
