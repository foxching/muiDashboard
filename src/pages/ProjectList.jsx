import React, { useState, useEffect } from 'react'
import { Avatar, Box, Card, IconButton, List, ListItem, ListItemText, Typography, ListItemIcon, Grid, CardActions } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import PageHeader from '../components/Common/PageHeader'
import LoadingSpinner from "../components/UI/LoadingSpinner"
import { getPost } from "../utils/blogRequest"
import { useStyles } from '../styles/projectListStyle'
import noImage from "../assets/images/no-image.jpg"

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



    console.log(posts)
    return (
        <Box>
            <PageHeader label="Projects" pageTitle="Project List" />
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
            <br /><br />
        </Box>
    )
}
