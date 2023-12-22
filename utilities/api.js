import axios from "axios";
import BaseUrl from "../constants/baseUrl";
import { toast } from "react-toastify";
import Router from "next/router";
import { selectLoginAuth } from "../redux/slices/auth";
import { useSelector } from "react-redux";

const axiosInstance = axios.create({
  baseURL: '',
  headers: {
    Accept: "application/json",
    'app-name': 'pos'
  },
});

// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
// Set the AUTH token for any request
axiosInstance.interceptors.request.use(function (config) {

// const Token = authData?.posUserLoginDetails?.payload?.token
//   ? authData?.posUserLoginDetails?.payload?.token
//   : "";
  const token = localStorage.getItem("authToken");
  config.headers.Authorization = token ? token : "";
  return config;
});


axiosInstance.interceptors.response.use(
  (response) => {
    console.log("hello")
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // handle 401 errors here
      localStorage.clear();
      Router.push("/");
      // toast.warning("Session expired");
    }
    return Promise.reject(error);
  }
);

// const axiosGet = (url, params = {}) => {
//   // delete params.cb

//   return axiosInstance
//     .get(url, { params: params })
//     .then((response) => {
//       return { status: true, data: response.data };
//     })
//     .catch((err) => {
//       return { status: false, error: err };
//     });
// };

const axiosGet = (url, params = {}) => {
  return axiosInstance.get(url, { params: params })
    .then((response) => {
      return { status: true, data: response.data };
    })
    .catch((err) => {
      return { status: false, error: err };
    });
};

const axiosPost = (url, params = {}) => {
  return axiosInstance
    .post(url, params)
    .then((response) => {
      return { status: true, data: response.data };
    })
    .catch((err) => {
      return { status: false, error: err };
    });
};

const axiosPut = (url, params = {}) => {
  return axiosInstance
    .put(url, params)
    .then((response) => {
      return { status: response.status, data: response.data };
    })
    .catch((err) => {
      return { status: err.status, error: err };
    });
};

const axiosPatch = (url, params = {}) => {
  return axiosInstance
    .patch(url, params)
    .then((response) => {
      return { status: response.status, data: response.data };
    })
    .catch((err) => {
      return { status: err.status, error: err };
    });
};

const postDelete = (url, params = {}) => {
  return axiosInstance
    .delete(url, params)
    .then((response) => {
      return { status: response.status, data: response.data };
    })
    .catch((err) => {
      return { status: err.status, error: err };
    });
};

const postDeleteParams = (url, params = {}) => {
  return axiosInstance
    .delete(url, { data: { ...params } })
    .then((response) => {
      return { status: response.status, data: response.data };
    })
    .catch((err) => {
      return { status: err.status, error: err };
    });
};


const axiosPostFormData = (url, params) => {
  const formData = new FormData();
  formData.append("file", params?.file);
  return axiosInstance
    .post(url, formData)
    .then((response) => {
      return { status: true, data: response.data };
    })
    .catch((err) => {
      return { status: false, error: err };
    });
};

const axiosPostFormDataMulti = (url, params) => {
  const formData = new FormData();
  params.file.forEach((ele) => {
    formData.append("file", ele);
  });

  return axiosInstance
    .post(url, formData)
    .then((response) => {
      return { status: true, data: response.data };
    })
    .catch((err) => {
      return { status: false, error: err };
    });
};

const axiosPostFormDataCommon = (url, params) => {
  return axiosInstance
    .post(url, params)
    .then((response) => {
      return { status: true, data: response.data };
    })
    .catch((err) => {
      return { status: false, error: err };
    });
};

export const ApiClient = {
  get: axiosGet,
  put: axiosPut,
  post: axiosPost,
  patch: axiosPatch,
  delete: postDelete,
  deleteparams: postDeleteParams,
  postFormData: axiosPostFormData,
  postFormDataMulti: axiosPostFormDataMulti,
  postFormDataCommon: axiosPostFormDataCommon,
};