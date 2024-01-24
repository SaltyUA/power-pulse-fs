import axios from 'axios';

export const auth = axios.create({
  baseURL: 'https://power-4vwy.onrender.com/api/v1/users',
});

export const setToken = (token) => {
  auth.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const clearToken = () => {
  auth.defaults.headers.common['Authorization'] = '';
};

export async function signUp(body) {
  const { data } = await auth.post('/register', body);
  return data;
}

export async function signIn(body) {
  const {
    data: { user },
  } = await auth.post('/login', body);
  setToken(user.token);
  return user;
}

export async function signOut() {
  const { data } = await auth.post('/logout');
  clearToken();
  return data;
}

export async function refresh(token) {
  setToken(token);
  const {
    data: { user },
  } = await auth('/current');
  return user;
}

export async function emailVerify(body) {
  const { data } = await auth.post('/verify', body);
  return data;
}

export async function resendVerify(body) {
  const { data } = await auth.post('/verifyResend', body);
  return data;
}

export async function patchUser(body) {
  const { data } = await auth.patch('/current/update', body);
  return data;
}

export async function putAvatar(formData) {
  const { data } = await auth.put('/upload', formData, {
    headers: { 'content-type': 'multipart/form-data' },
  });
  return data;
}
