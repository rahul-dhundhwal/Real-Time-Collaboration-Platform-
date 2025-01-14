import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchDocuments = async () => {
  const response = await api.get('/api/documents');
  return response.data;
};

export const createDocument = async (document) => {
  const response = await api.post('/api/documents', document);
  return response.data;
};

export const updateDocument = async (id, document) => {
  const response = await api.put(`/api/documents/${id}`, document);
  return response.data;
};

export const deleteDocument = async (id) => {
  const response = await api.delete(`/api/documents/${id}`);
  return response.data;
};

export const fetchUsers = async () => {
  const response = await api.get('/api/users');
  return response.data;
};

export const authenticateUser = async (credentials) => {
  const response = await api.post('/api/auth/login', credentials);
  return response.data;
};