import axios from 'axios';
export const exercises = axios.create({
  baseURL: 'https://power-4vwy.onrender.com/api/v1/',
});

export const tokenControl = {
  set(token) {
    exercises.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    exercises.defaults.headers.common.Authorization = '';
  },
};

export async function get(params) {
  const { data } = await exercises.get('/products', { params });
  return data;
}
