import axios from 'axios';


export const exercises = axios.create({
    baseURL: 'https://power-4vwy.onrender.com/api/v1',
  });

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTZkYzVhNDAxNGI0M2MxZTI3NzQyNSIsImlhdCI6MTcwNTQ3NTgxOCwiZXhwIjoxNzA1NTU4NjE4fQ.z8bykb10qFiW1q0cGq2E0-CLDNbPBDHPKOO3VZeW9Zc';
    exercises.defaults.headers.common['Authorization'] = `Bearer ${token}`;



export async function fetchBodyParts(){
    const res = await exercises.get('/filters');
    return res.data;
}

export async function fetchMuscles(params){
    const res = await exercises.get('/filters?filter=Muscles',{params});
    return res.data;
}

export async function fetchEquipment(params){
    const {data} = await exercises.get('/filters/?filter=Equipment', {params});
    return data;
}