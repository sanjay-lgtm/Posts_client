import axios from 'axios';

const VITE_API_URL = import.meta.env.VITE_API_URL;

export const getPosts = async () => {
    const response = await axios.get(`${VITE_API_URL}/posts`);
    return response.data;
}

export const getPost = async (id) => {
    const response = await axios.get(`${VITE_API_URL}/posts/${id}`);
    return response.data;
}

export const createPost = async (post) => {
    const response = await axios.post(`${VITE_API_URL}/posts`, post);
    return response.data;
}

export const updatePost = async (id, post) => {
    const response = await axios.put(`${VITE_API_URL}/posts/${id}`, post);
    return response.data;
}

export const deletePost = async (id) => {
    await axios.delete(`${VITE_API_URL}/posts/${id}`);
}
