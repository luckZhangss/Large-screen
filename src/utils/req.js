import axios from "axios";


const instance = axios.create({
    baseURL:'http://127.0.0.1:3333/user/area',
    timeout:5000
})

instance.interceptors.request.use((cfg)=>{
    return cfg
})

instance.interceptors.response.use((res)=>{
    return res
})

export default instance