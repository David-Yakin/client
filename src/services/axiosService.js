import axios from "axios";

axios.interceptors.request.use(
  data => {
    console.log("in axiosService request interceptors");
    return Promise.resolve(data);
  },
  error => {
    console.log("in axiosService request interceptors error");
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  data => {
    console.log("in axiosService response");
    return Promise.resolve(data);
  },
  error => {
    console.log("in axiosService response interceptors error");
    console.log(`Error from server: ${error.response.data}`);
    console.log(`Error from axios: ${error.message}`);
    return Promise.reject(error);
  }
);

// import axios from "axios";/

// // import { toast } from "react-toastify";/
// // import { getJWT } from "./userService";

// axios.interceptors.request.use(
//   data => {
//     // axios.defaults.headers.common["x-auth-token"] = getJWT();
//     axios.defaults.headers.common["x-auth-token"] = "token";
//     console.log("in axiosService request interceptors");
//     return Promise.resolve(data);
//   },
//   error => {
//     const expectedError = error.response && error.response.status >= 400;
//     // if (expectedError) toast.error(`An error occurred: ${error.message}`);
//     return Promise.reject(error);
//   }
// );

// axios.interceptors.response.use(null, error => {
//   //   console.log(error);
//   console.log(`Error from server: ${error.response.data}`);
//   console.log(`Error from axios: ${error.message}`);
//   console.log("in axiosService response interceptors");
//   const expectedError = error.response && error.response.status >= 400;
//   //   if (expectedError) toast.error(`An error occurred: ${error.message}`);
//   return Promise.reject(error);
// });
