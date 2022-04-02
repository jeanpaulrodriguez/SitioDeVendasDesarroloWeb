import axios, { Axios } from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/desarolloweb-c0b73/us-central1/api'  //THE API (cloud function) URL
});

export default instance;