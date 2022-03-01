import axios from "axios"
const httpInstance=axios.create({
    baseURL:`https://jsonplaceholder.typicode.com`
})
export default httpInstance;