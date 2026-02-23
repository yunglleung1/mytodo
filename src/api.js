import axios from 'axios';

const api = axios.create({
//   baseURL: 'http://127.0.0.1:8000/',  // ← live Railway URL
  baseURL: 'https://mytodo-backend-production-a51e.up.railway.app/',  // ← live Railway URL
  headers: {
    'Content-Type': 'application/json',
    // Later for password: 'X-API-Key': 'secret-key'
  }
});

export default api;