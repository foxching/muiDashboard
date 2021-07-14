import React, { useState, useEffect } from 'react'
import { Avatar, Box, Card, IconButton, List, ListItem, ListItemText, Typography, ListItemIcon, Grid, CardActions } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';
import FavoriteIcon from '@material-ui/icons/Favorite'
import PageHeader from '../components/Common/PageHeader'
import LoadingSpinner from "../components/UI/LoadingSpinner"
import { getPost } from "../utils/blogRequest"
import { useStyles } from '../styles/projectListStyle'
import noImage from "../assets/images/no-image.jpg"
import Searchbar from '../components/UI/Searchbar'

export default function ProjectList() {
    const [fetched, setIsFetched] = useState(false)
    const [posts, setPosts] = useState([])
    const classes = useStyles()

    useEffect(() => {
        if (!fetched) {
            getPost({ limit: 15 }).then(({ data: { data } }) => setPosts(data))
            setIsFetched(true)
        }

    }, [fetched])

    if (posts.length === 0) {
        return <LoadingSpinner />
    }

    return (
        <Box className={classes.section}>
            <Box className={classes.headerWrapper}>
                <PageHeader label="Projects" pageTitle="Project List" />
                <Searchbar />
            </Box>

            <Box className={classes.listWrapper}>
                <Grid container spacing={1}>
                    {posts.map(post => (
                        <Grid item xs={12} sm={4}>
                            <Card>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Avatar src={post.owner.picture} alt={post.owner.firstName}>{post.owner.firstName}</Avatar>
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography variant="body1" component="h6">{post.owner.firstName}</Typography>
                                            <Typography variant="subtitle2" color="textSecondary"></Typography>
                                        </ListItemText>
                                    </ListItem>
                                </List>

                                <img src={post.image == null ? noImage : post.image} alt={post.id} className={`${classes.cardImage} ${classes.responsiveImage}`} />
                                <CardActions>
                                    <IconButton color="secondary" size="small">
                                        <FavoriteIcon />{post.likes}
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", margin: "15px" }}>
                <div />
                <Pagination count={10} shape="rounded" />
            </Box>
            <br />
        </Box>
    )
}
