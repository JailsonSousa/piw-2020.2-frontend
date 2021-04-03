import axios from 'axios';

const api = axios.create({
  baseURL: 'https://piw-server.herokuapp.com',
});

export default api;
