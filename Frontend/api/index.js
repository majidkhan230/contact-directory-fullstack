import axios from 'axios'


const apiClient = axios.create(
    {
        // baseURL:"http://localhost:8080",
        baseURL:"https://contact-directory-fullstack.vercel.app",
        timeout:3000,
        headers:{
            "Content-Type":"application/json"
        }
    }
)


export default apiClient