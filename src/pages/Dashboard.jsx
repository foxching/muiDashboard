import React, { useState, useEffect } from 'react'
import { Box } from '@material-ui/core'
import PageHeader from "../components/Common/PageHeader"
import UserOverview from "../components/Dashboard/UserOverview"
import ListItemComponent from '../components/Dashboard/ListItemComponent';
import CardGraphs from '../components/Dashboard/CardGraphs';
import { getPost, getUser } from "../utils/blogRequest"

export default function Dashboard() {
    const [fetched, setIsFetched] = useState(false)
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        if (!fetched) {
            getPost({ limit: 5 }).then(({ data: { data } }) => setPosts(data))
            setIsFetched(true)
            getUser({ limit: 5 }).then(({ data: { data } }) => setUsers(data))
            setIsFetched(true)
        }
    }, [fetched])

    return (
        <Box>
            <PageHeader label="Dashboard" pageTitle="Automation Overview" />
            <CardGraphs />
            <UserOverview />
            <ListItemComponent posts={posts} users={users} />
        </Box>
    )
}
