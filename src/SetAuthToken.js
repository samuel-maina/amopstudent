import axios from 'axios';

export const SetAuthToken = token => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        axios.defaults.baseURL='http://104.248.113.144:8080/api/v1/';
    }
    else
        delete axios.defaults.headers.common["Authorization"];
};
export default SetAuthToken;


