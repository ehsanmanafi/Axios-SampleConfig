import axios from "axios";
export enum methods {
    GET,
    POST,
    PUT,
    DELETE,
}
interface IConfigAxiosType {
    token: string;
    url: string;
    method: methods;
    inputData: any;
    contentType: string;
    resonseType: string;
}
export const inputAxiosConfig: IConfigAxiosType = {
    token: "",
    url: "",
    method: methods.GET,
    inputData: undefined,
    contentType: "application/json",
    resonseType: "",
};

export const axiosBase = (configAxios: IConfigAxiosType) => {
    const tmpAxios = axios.create();
    tmpAxios.defaults.baseURL = "http://localhost:8181/api/v1";
    if (configAxios.token !== "")
        tmpAxios.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${configAxios.token}`;

    tmpAxios.defaults.headers.common["Content-Type"] = configAxios.contentType;
    let response = null;
    if (configAxios.method === methods.GET) {
        if (configAxios.resonseType === "blob")
            response = tmpAxios.get(configAxios.url, { responseType: "blob" });
        else response = tmpAxios.get(configAxios.url);
    } else if (configAxios.method === methods.POST) {
        response = tmpAxios.post(configAxios.url, configAxios.inputData);
    } else if (configAxios.method === methods.PUT) {
        response = tmpAxios.put(configAxios.url, configAxios.inputData);
    } else if (configAxios.method === methods.DELETE) {
        response = tmpAxios.delete(configAxios.url);
    }

    return response;
};
