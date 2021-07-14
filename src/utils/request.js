import axios from 'axios'

axios.interceptors.request.use((config) => {
    config.headers['app-id'] = '60eebdadfd167ca3bf2c3708';
    return config
})

//60ed65d31c4ea342b335e98f

export const request = {
    get: axios.get
}