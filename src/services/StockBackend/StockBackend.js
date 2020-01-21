import axios from 'axios';
const API_URL = 'https://jsonplaceholder.typicode.com'

class StockBackend {
    async getAllUsers() {
        const url = `${API_URL}/users/`;
        return axios.get(url).then(response => response.data);
    }
}

export default StockBackend;