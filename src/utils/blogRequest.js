import { request as https } from './request'


export const getPost = ({ limit }) => {
    return https.get(` https://dummyapi.io/data/api/post?limit=${limit}`)
}

export const getUser = ({ limit }) => {
    return https.get(` https://dummyapi.io/data/api/user?limit=${limit}`)
}