import axios from 'axios';

// Get user token
const user = JSON.parse(localStorage.getItem("todoapp"));

// Default auth header
if (user && user.token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
} else {
    // Optionally handle the case where the user is not logged in
    console.warn("No user token found. Authorization header not set.");
}

// Create todo
const createTodo = (data) => {
    return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/todo/create`, data);
};

const getAllTodo = (id) => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/api/v1/todo/getAll/${id}`;
    console.log("Request URL:", url); // Log the URL
    return axios.get(url);
};

// Update todo
const updateTodo = (id, data) => {
    return axios.patch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/todo/update/${id}`, data);
};

// Delete todo
const deleteTodo = (id) => {
    return axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/v1/todo/delete/${id}`);
};

const TodoServices = { createTodo, getAllTodo, updateTodo, deleteTodo };

export default TodoServices;
