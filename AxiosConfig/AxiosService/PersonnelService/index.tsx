import PersonnelModel from "../../../../models/PersonnelModel";
import AuthService from "../../../AuthService";
import { axiosBase, inputAxiosConfig, methods } from "../../AxiosBase"

//Sample CRUD Impl.

export const findAllPageable = (page?: number, size?: number) => {
    const config = { ...inputAxiosConfig }; // Clone shared config
    config.url = "/personnel/findAllPageable";
    if (page != null && size != null) inputAxiosConfig.url += `?page=${page}&size=${size}`
    config.method = methods.GET;
    config.token=AuthService.getToken() || "";
    return axiosBase(config);
}
export const insertPersonnel = (item: PersonnelModel) => {
    const config = { ...inputAxiosConfig }; // Clone shared config
    config.url = "/personnel/insertPersonnel";
    config.method = methods.POST;
    config.inputData = item;
    return axiosBase(config);
}

export const updatePersonnel = (item: PersonnelModel) => {
    const config = { ...inputAxiosConfig }; // Clone shared config
    config.url = "/personnel/updatePersonnel";
    config.method = methods.PUT;
    config.inputData = item;
    return axiosBase(config);
}

export const deletePersonnel = (id: string) => {
    const config = { ...inputAxiosConfig }; // Clone shared config
    config.url = `/personnel/deletePersonnel/${id}`;
    config.method = methods.DELETE;
    return axiosBase(config);
}
