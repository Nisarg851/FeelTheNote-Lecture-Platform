import axios from "axios";

// data: contains the data in the body of response

export const getRequest = async (url) => {
    const data = await axios.get(url)
                            .then(res => res.data)
                            .catch(err => ({error: err.response.data}));
    return data;
}

export const postRequest = async (url, payload={}) => {
    const data = await axios.post(url, payload)
                            .then(res => res.data)
                            .catch(err => ({error: err.response.data}));
    return data;
}