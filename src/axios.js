import axios from "axios";

const instance = axios.create({
  baseURL: "https://whatsapp-portfolio-backend.herokuapp.com/",
});

export default instance;
