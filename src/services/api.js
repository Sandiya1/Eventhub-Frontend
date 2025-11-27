import axios from "axios";

const api = axios.create({
  baseURL: "https://eventhub-backend-0240.onrender.com/",
});

export default api;
