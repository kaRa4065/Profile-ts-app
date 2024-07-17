import axios from "axios";
import { getCookie } from "typescript-cookie";

const createInstance = () => {
  const instance = axios.create();
  instance.defaults.headers.post["Content-Type"] = "application/json";
  instance.defaults.headers.common["Authorization"] =
    "Bearer " + getCookie("Token1");
  return instance;
};
const apiCall = {
  get: (url, callback) => {
    createInstance()
      .get(url)
      .then((result) => {
        callback(result.data);
      })
      .catch((error) => {});
  },
  post: (url, data, callback) => {
    createInstance()
      .post(url, data)
      .then((result) => {
        callback(result.data);
      })
      .catch((error) => {});
  },
  delete: (url, data, callback) => {
    createInstance()
      .delete(url, data)
      .then((result) => {
        callback(result.data);
      })
      .catch((error) => {});
  },
};
export default apiCall;
