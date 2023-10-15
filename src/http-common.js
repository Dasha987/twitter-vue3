import axios from "axios";

export default axios.create({
    baseURL: 'https://twitter-705ac-default-rtdb.europe-west1.firebasedatabase.app',
    header: {
        'Content-type': 'application/json'
    }
})