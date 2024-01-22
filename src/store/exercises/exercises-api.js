import axios from 'axios';


export const exercises = axios.create({
    baseURL: 'https://power-4vwy.onrender.com/api/v1',
  });

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWJiYjEwZjM5YjFiNTUzODhmYmYzMCIsImlhdCI6MTcwNTg1MjUxMiwiZXhwIjoxNzA1OTM1MzEyfQ.1Ms9cmS45sEJNgDlYKZsxjZfVxBTdUWFcC_Y8Q05Btk';
    exercises.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export async function fetchExercises(){
    const res = await exercises.get('/exercises');
    return res.data;
    }


export async function fetchBodyParts(){
    const res = await exercises.get('/exercises/filters');
    return res.data;
}

export async function fetchMuscles(params){
    const res = await exercises.get('/exercises/filters?filter=Muscles',{params});
    return res.data;
}

export async function fetchEquipment(params){
    const {data} = await exercises.get('/exercises/filters/?filter=Equipment', {params});
    return data;
}