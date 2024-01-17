import axios from 'axios';

export const products = axios.create({
  baseURL: 'https://power-4vwy.onrender.com/api/v1/',
});
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTVjMDk0OTMxNTg5MjQyNGM2YzgzOCIsImlhdCI6MTcwNTQyODAwMCwiZXhwIjoxNzA1NTEwODAwfQ.fbibZy8tavk14n6cmLSU74olb2XtNq1XMdADZE0X7pk';
products.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export async function getProducts(params) {
  const { data } = await products.get('/products', { params });
  return data;
}

export async function addProduct(body) {
  const data = await products.post('/diary-records/add-product', body);
  return data;
}
