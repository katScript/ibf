import {get, post, del} from "utils/http";

const PATH = "/v1/admin";

export const getAdminById = (params) => get(`${PATH}/${params}`);
export const getAllAdmin = () => get(`${PATH}/all`);
export const getAdminByUserId = (id) => get(`${PATH}/user/${id}`);
export const registerAdmin = (params) => post(`${PATH}/auth/register`, params).catch((e) => {throw e;});
export const saveAdminData = (params) => post(`${PATH}/save`, params).catch((e) => {throw e;});
export const deleteAdmin = (id) => del(`${PATH}/${id}`).catch((e) => {throw e;});

// billing
export const getAllBillingCardRequest = () => get(`${PATH}/billing/card/all`).catch((e) => {throw e;});
export const getBillingCardRequest = (id = null) => get(`${PATH}/billing/card/${id}`).catch((e) => {throw e;});

export const getAllBillingAddress = () => get(`${PATH}/billing/all`).catch((e) => {throw e;});
export const getBillingAddress = (billingId = null) => get(`${PATH}/billing/${billingId}`).catch((e) => {throw e;});
export const deleteBillingAddress = (billingId = null) => del(`${PATH}/billing/${billingId}`).catch((e) => {throw e;});
export const saveBillingAddress = (params = {}) => post(`${PATH}/billing/save`, params).catch((e) => {throw e;});
