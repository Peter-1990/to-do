import axios from 'axios'

//get user token
const user = JSON.parse(localStorage.getItem("todoapp"));


//default auth header
axios.defaults.headers.common["Authorization"] = `bearer ${user.token}`

//create todo
const createTodo = (data) => {
    return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/todo/create`, data);
};

const getAllTodo = (id) => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/api/v1/todo/getAll/${id}`;
    console.log("Request URL:", url); // Log the URL
    return axios.get(url);
};


//
const updateTodo = (id, data) => {
    return axios.patch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/todo/update/${id}`, data);
};

//delete todo
const deleteTodo = (id) => {
    return axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/v1/todo/delete/${id}`);
};

const TodoServices = { createTodo, getAllTodo, updateTodo, deleteTodo };

export default TodoServices;