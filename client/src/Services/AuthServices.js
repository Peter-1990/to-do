import axios from "axios";

const registerUser = (data) => {
    return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/user/register`, data);
};

const loginUser = (data) => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/login`;
    console.log("Login URL:", url);
    return axios.post(url, data);
};

const AuthServices = { registerUser, loginUser };

export default AuthServices