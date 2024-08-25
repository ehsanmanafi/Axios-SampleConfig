import PersonnelModel from "../../../../models/PersonnelModel";
import AuthService from "../../../AuthService";
import { axiosBase, inputAxiosConfig, methods } from "../../AxiosBase"

//Sample CRUD Impl.

export const findAllPageable = (page?: number, size?: number) => {
    inputAxiosConfig.url = "/personnel/findAllPageable";
    if (page != null && size != null) inputAxiosConfig.url += `?page=${page}&size=${size}`
    inputAxiosConfig.method = methods.GET;
    inputAxiosConfig.token=AuthService.getToken() || "";
    console.log(AuthService.getToken())
    return axiosBase(inputAxiosConfig);
}
export const insertPersonnel = (item: PersonnelModel) => {
    inputAxiosConfig.url = "/personnel/insertPersonnel";
    inputAxiosConfig.method = methods.POST;
    inputAxiosConfig.inputData = item;
    return axiosBase(inputAxiosConfig);
}

export const updatePersonnel = (item: PersonnelModel) => {
    inputAxiosConfig.url = "/personnel/updatePersonnel";
    inputAxiosConfig.method = methods.PUT;
    inputAxiosConfig.inputData = item;
    return axiosBase(inputAxiosConfig);
}

export const deletePersonnel = (id: string) => {
    inputAxiosConfig.url = `/personnel/deletePersonnel/${id}`;
    inputAxiosConfig.method = methods.DELETE;
    return axiosBase(inputAxiosConfig);
}