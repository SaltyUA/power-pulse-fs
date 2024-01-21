import axios from 'axios';
import { auth } from './auth';
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

export async function getDiaryRecords(params) {
  const { data } = await getDiaryRecords.get('/diary-records', {
    params,
  });
  return data;
}
