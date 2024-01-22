import axios from 'axios';

export const exercises = axios.create({
  baseURL: 'https://power-4vwy.onrender.com/api/v1',
});

export const tokenControl = {
  set(token) {
    exercises.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    exercises.defaults.headers.common.Authorization = '';
  },
};

export async function fetchExercises() {
  const res = await exercises.get('/exercises');
  return res.data;
}

export async function fetchBodyParts() {
  const res = await exercises.get('/exercises/filters');
  return res.data;
}

export async function fetchMuscles(params) {
  const res = await exercises.get('/exercises/filters?filter=Muscles', {
    params,
  });
  return res.data;
}

export async function fetchEquipment(params) {
  const { data } = await exercises.get('/exercises/filters/?filter=Equipment', {
    params,
  });
  return data;
}
