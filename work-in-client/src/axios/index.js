import axios from 'axios';

export default function withAuth() {
  const payload = localStorage.getItem('payload');

  const instance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });

  return axiosInstance;
}