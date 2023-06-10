import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';


const API_ENDPOINTS = {
    login: '/users/login',
    signup: '/users/signup',
    todos: '/todos',
};


axios.defaults.headers.common['Content-Type'] = 'application/json';


const api = axios.create({
    baseURL: API_BASE_URL,
});


export const login = async (email, password) => {
    try {
        const response = await api.post(API_ENDPOINTS.login, {email, password});
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};


export const signup = async (name, email, password) => {
    try {
        const response = await api.post(API_ENDPOINTS.signup, {name, email, password});
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};


export const getTodos = async (token) => {
    try {
        const response = await api.get(API_ENDPOINTS.todos, {
            headers: {Authorization: token},
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};


export const createTodo = async (todo, token) => {
    try {
        const response = await api.post(API_ENDPOINTS.todos, todo, {
            headers: {Authorization: token},
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const updateTodo = async (todoId, todo, token) => {
    try {
        const response = await api.put(`${API_ENDPOINTS.todos}/${todoId}`, todo, {
            headers: {Authorization: token},
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};


export const deleteTodo = async (todoId, token) => {
    try {
        await api.delete(`${API_ENDPOINTS.todos}/${todoId}`, {
            headers: {Authorization: token},
        });
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};
