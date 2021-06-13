import axios from 'axios'

const apiDb = axios.create({
    baseURL: 'http://localhost:3001/'
})

export default apiDb;