import React from 'react'
import { Avatar, Box, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@material-ui/core'
import LoadingSpinner from '../UI/LoadingSpinner'
import { useStyles } from "../../styles/headerStyle"

export default function ListItemComponent({ posts, users }) {
    const classes = useStyles()
    return (
        <Box className={classes.section}>
            <Grid container spacing={1} >
                <Grid item xs={12} sm={6} md={5}>
                    <Paper>
                        <List>
                            <ListItem>
                                <Typography>Top Users</Typography>
                            </ListItem>
                            <Divider />
                            {users.length === 0 ? <LoadingSpinner /> : users.map((user, i) => (
                                <ListItem key={i}>
                                    <ListItemIcon>
                                        <Avatar src={user.picture} alt={user.firstName}></Avatar>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant="body1" component="h6">{user.firstName}</Typography>
                                        <Typography variant="subtitle2" color="textSecondary">{user.email}</Typography>
                                    </ListItemText>

                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={7}>
                    <Paper>
                        <List>
                            <ListItem>
                                <Typography>Latest Post</Typography>
                            </ListItem>
                            <Divider />
                            {posts.length === 0 ? <LoadingSpinner /> : posts.map((post, i) => (
                                <ListItem key={i}>
                                    <ListItemIcon>
                                        <Avatar src={post.image} alt={post.text}></Avatar>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant="body1" component="h6">{post.text}</Typography>
                                    </ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}
