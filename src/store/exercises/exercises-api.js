import axios from 'axios';

export const exercises = axios.create({
    baseURL: 'https://power-4vwy.onrender.com/api/v1',
  });

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTZkYzVhNDAxNGI0M2MxZTI3NzQyNSIsImlhdCI6MTcwNTQzNDI2MSwiZXhwIjoxNzA1NTE3MDYxfQ.235XsJA45_rHjv89uxBPy2aSMg40xNVBDFEy7Vvm9Ik';
  exercises.defaults.headers.common['Authorization'] = `Bearer ${token}`;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTZkYzVhNDAxNGI0M2MxZTI3NzQyNSIsImlhdCI6MTcwNTQzNDI2MSwiZXhwIjoxNzA1NTE3MDYxfQ.235XsJA45_rHjv89uxBPy2aSMg40xNVBDFEy7Vvm9Ik;  

export async function fetchBodyParts(){
    const {data} = await axios.get(`/filters`);
    return data;
    
}

export async function fetchMuscules(){
    const {data} = await axios.get(`/filters/filters?filter=Musculs`);
    return data;
}

export async function fetchEquipments(){
    const {data} = await axios.get(`/filters/filters?filter=Equipments`);
    return data;
}