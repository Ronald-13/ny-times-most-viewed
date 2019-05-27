import { API_URL, API_KEY } from '../config/index';
import axios from 'axios';

export function getArticles() {
    return axios.get(`${API_URL}/svc/mostpopular/v2/mostviewed/all-sections/30.json?api-key=${API_KEY}`)
        .then(response => response.data);
}