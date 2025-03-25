// make http request and send data from local storage back
import axios from 'axios'

const API_URL = 'http://localhost:5000/api/users/'

// register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)    // make the request and put response in response variable accessed through .data

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// put any functions we want to export here
const authService = {
    register,
}

export default authService