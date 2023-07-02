import axios from "axios";

const instance = axios.create({
  baseURL: "...", // The API (Cloud Function) URL
});

export default instance;
