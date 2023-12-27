import { Axios } from "axios";

export const request = new Axios({
  baseURL: "http://127.0.0.1:8000/api",
});
