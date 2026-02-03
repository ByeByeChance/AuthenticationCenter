import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { showFullScreenLoading, tryHideFullScreenLoading } from "@/components/Loading/fullScreen";
import { LOGIN_URL } from "@/config";
import { ResultData } from "@/api/interface";
import { ResultEnum } from "@/enums/httpEnum";
import { message } from "@/hooks/useMessage";
import { checkStatus } from "./helper/checkStatus";

export interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  loading?: boolean;
  timeout?: number; // 支持每个请求单独配置timeout
}

// 默认配置，不含timeout，timeout将在请求拦截器中动态设置
const defaultConfig = {
  // The default address request address, which can be modified in the .env.** file
  baseURL: import.meta.env.VITE_API_URL as string,
  // Credentials are allowed to be carried across domains
  withCredentials: false
};

// 默认timeout值
const DEFAULT_TIMEOUT = ResultEnum.TIMEOUT as number;

class RequestHttp {
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig) {
    // instantiation
    this.service = axios.create(config);

    /**
     * @description request interceptor
     * Client sends request -> [request interceptor] -> server
     * token verification (JWT): Accept the token returned by the server and store it in redux/local storage
     */
    this.service.interceptors.request.use(
      (config: CustomAxiosRequestConfig) => {
        // The current request needs to display loading, which is controlled by the third parameter specified in the API service: {loading: true}
        config.loading && showFullScreenLoading();

        // 动态设置timeout，如果请求中指定了timeout则使用请求中的值，否则使用默认值
        if (config.timeout === undefined) {
          config.timeout = DEFAULT_TIMEOUT;
        }

        if (config.headers && typeof config.headers.set === "function") {
          // 从localStorage获取token，避免使用Hooks
          const token = localStorage.getItem("token") || "";
          config.headers.set("x-access-token", token);
          // 为GET请求添加content-type为json的请求头
          if (config.method?.toUpperCase() === "GET") {
            config.headers.set("Content-Type", "application/json");
            // 给data赋值以绕过if判断
            config.data = true;
          }
          config.headers["Content-Type"] = "application/json";
        }
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    /**
     * @description response interceptor
     *  The server returns the information -> [intercept unified processing] -> the client JS gets the information
     */
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data } = response;
        tryHideFullScreenLoading();
        // login failure
        if (data.code == ResultEnum.OVERDUE) {
          message.error(data.msg);
          // 直接重定向到登录页面，避免使用Hooks
          window.location.href = LOGIN_URL;
          return Promise.reject(data);
        }
        // Global error information interception (to prevent data stream from being returned when downloading files, and report errors directly without code)
        // 兼容不规范接口返回code为1或0的情况
        if ((data.code && ![ResultEnum.SUCCESS, 1].includes(data.code)) || !data.code) {
          message.error(data.msg);
          return Promise.reject(data);
        }
        // Successful request (no need to handle failure logic on the page unless there are special circumstances)
        return data;
      },
      async (error: AxiosError) => {
        const { response } = error;
        tryHideFullScreenLoading();
        // Request timeout && network error judged separately, no response
        if (error.message.indexOf("timeout") !== -1) message.error("请求超时！请您稍后重试");
        if (error.message.indexOf("Network Error") !== -1) message.error("网络错误！请您稍后重试");
        // Do different processing according to the error status code of the server response
        if (response) checkStatus(response.status);
        // The server does not return any results (maybe the server is wrong or the client is disconnected from the network), disconnection processing: you can jump to the disconnection page
        if (!window.navigator.onLine) window.location.href = "/500";
        return Promise.reject(error);
      }
    );
  }

  /**
   * @description Common request method encapsulation
   */
  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.get(url, { params, ..._object });
  }
  post<T>(url: string, params?: object | string, _object = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, _object);
  }
  put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.put(url, params, _object);
  }
  delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
    return this.service.delete(url, { params, ..._object });
  }
  download(url: string, params?: object, _object = {}): Promise<BlobPart> {
    return this.service.post(url, params, { ..._object, responseType: "blob" });
  }
}

export default new RequestHttp(defaultConfig);
