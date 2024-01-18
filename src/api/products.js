import axios from 'axios';
import { auth } from './auth';
export const products = axios.create({
  baseURL: 'https://power-4vwy.onrender.com/api/v1/',
});
const token = auth.defaults.headers.common['Authorization'];

products.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export async function getProducts(params) {
  const { data } = await products.get('/products', { params });
  return data;
}

export async function addProduct(body) {
  const data = await products.post('/diary-records/add-product', body);
  return data;
}
