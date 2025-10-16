import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080", // change to your backend URL later
});

export default API;
