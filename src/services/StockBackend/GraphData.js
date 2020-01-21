import axios from 'axios';
import React from 'react';
const API_URL = 'https://two-guys-with-computers.herokuapp.com';

class GraphData extends React.Component {

    /*async getGraphData() {
        // Axios call to API
        const url = `${API_URL}/stock_data`;
        return axios.get(url).then(response => Response.data);
    }*/

    async getGraphData() {
        
        const url = `${API_URL}/stock_data`;
        return axios.get(url).then(response => response.data);
    }

}

export default GraphData;