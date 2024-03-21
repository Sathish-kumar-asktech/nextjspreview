import axios from "axios";

 const baseURL = 'http://localhost:1999/api/';
// const baseURL = "http://103.73.189.37/TOMS_TECHVEEL_API/api/";

const instance = axios.create({
  baseURL,
});

export default {
  instance,
  baseURL,
};
