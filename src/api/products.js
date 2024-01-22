import axios from 'axios';

export const products = axios.create({
  baseURL: 'https://power-4vwy.onrender.com/api/v1/',
});

export const tokenControl = {
    set(token) {
         products.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        products.defaults.headers.common.Authorization = '';
    }
}


export async function getProducts(params) {
  const { data } = await products.get('/products', { params });
  return data;
}

export async function addProduct(body, _id) {
  const data = await products.post(`/diary-records/add-product/${_id}`, body);
  return data;
}

export async function getCategories() {
  const data = await products.get('/products/categories');
  return data;
}