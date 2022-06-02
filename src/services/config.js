import axios from "axios";

export const http = axios.create({
    baseURL:'https://api-teste-front-end-fc.herokuapp.com/'
})