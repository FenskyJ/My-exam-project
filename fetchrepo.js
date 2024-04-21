// services/GitHubServices.js
import axios from 'axios';


const BASE_URL = 'https://api.github.com';

const fetchRepositories = (username, page = 1, perPage = 10) => {
    return axios.get(`${BASE_URL}/users/${username}/repos`, {
        params: {page, per_page: perPage},
    }`);
};

export default {
    fetchRepositories,
}