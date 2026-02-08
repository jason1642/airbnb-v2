import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://bnb-listings-production.up.railway.app' : 'http://localhost:3004';
const api = axios.create({
    baseURL: baseUrl,
});

export const getMany = async () => 
    await api.get('/listings')


// pass a name of a market (e.g. "New York") and return a number of listings in that market
export const queryMarkets = async({name, limit}: {name: string, limit: number}) =>{
    return await api.get(`/listings/query?name=${name} &limit=${limit}`);
}