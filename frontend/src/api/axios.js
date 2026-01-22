import axios from "axios";

const api = axios.create({
  baseURL: "https://devscribe-backend-4by2.onrender.com/api",
});

export default api;
