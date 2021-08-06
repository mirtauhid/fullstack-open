/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const URL = "/api";

const getAllData = () => {
    return axios.get(`${URL}/persons`)
}

const saveData = (newData) => {
    return axios.post(`${URL}/persons`, newData)
}

const removeData = (id) => {
    return axios.delete(`${URL}/persons/${id}`)
}

const updateData = (id, object) => {
    return axios.put(`${URL}/persons/${id}`, object)
}



export default { getAllData, saveData, removeData, updateData }