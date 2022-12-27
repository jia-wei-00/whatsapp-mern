import axios from "axios";

const instance = axios.create({
  baseURL: "https://web-production-a6c6.up.railway.app/",
});

export default instance;
