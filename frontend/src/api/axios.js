import axios from "axios";

const api = axios.create({
  baseURL: "https://devscribe-backend.onrender.com/api",
});

export default api;
