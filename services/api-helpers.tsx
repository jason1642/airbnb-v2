import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://bnb-listings-production.up.railway.app' : 'http://localhost:3004';
const api = axios.create({
    baseURL: baseUrl,
});

export const getManyByQuery = async (query: any) => 
    await api.get('/listings')
