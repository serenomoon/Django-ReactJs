import axios from 'axios'

const api = axios.create({
    baseURL:'https://saulofernandez.herokuapp.com/workslist/'
});


export default api;
