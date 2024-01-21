import axios from 'axios';

export const diary = axios.create({
  baseURL: 'https://power-4vwy.onrender.com/api/v1',
});

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWJiMzI0ZjM5YjFiNTUzODhmYmYwNyIsImlhdCI6MTcwNTc1NDg0OCwiZXhwIjoxNzA1ODM3NjQ4fQ.g79eFSzlZhsxNVcWUxrEs_ndUkp-wXPBkixMKgQW7gc';
diary.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export const tokenControl = {
  set(token) {
    diary.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    diary.defaults.headers.common.Authorization = '';
  },
};


export async function fetchDiary(date) {
   const res = await diary.get(`/diary-records/${date}`);
 
  return res.data;
}

export async function fetchAllExercises() {
  const res = await diary.get(`/exercises`);

  return res.data;
}

export async function fetchExerciseRemove({ date, id }) {
  const res = await diary.delete(
    `/diary-records/${date}/remove-exercise/${id}`
  );

  return res.data;
}
