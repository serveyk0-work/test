import axios from 'axios';
const baseURL = 'http://192.168.0.45:8080/';
const timeout = 6000;

export const http = axios.create({
  baseURL,
  timeout,
});